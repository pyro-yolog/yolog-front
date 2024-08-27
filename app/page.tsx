'use client';

import { useEffect } from 'react';
import { gowunBatang } from './components/ui/fonts';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { tokenState } from '@/lib/store/user';

function Home() {
  const router = useRouter();
  const { accessToken } = useRecoilValue(tokenState);

  useEffect(() => {
    if (accessToken) {
      router.prefetch('/trip');
    } else {
      router.prefetch('/onboarding');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const routeToOnboarding = () => {
    setTimeout(() => {
      if (accessToken) {
        router.replace('/trip');
      } else {
        router.replace('/onboarding');
      }
    }, 1000);
  };

  return (
    <div className="relative flex flex-col justify-center h-full items-center">
      <p
        className={`text-white ${gowunBatang.className} text-40pxr font-bold leading-[45px]`}
      >
        여록
      </p>

      <p
        className={`text-white ${gowunBatang.className} text-20pxr font-bold leading-[45px] opacity-0 animate-[fadeInLeft_1s_ease-in-out_1s_forwards]`}
        onAnimationEnd={routeToOnboarding}
      >
        ; 여행을 기록하다
      </p>
    </div>
  );
}

export default Home;
