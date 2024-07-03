'use client';

import { useEffect } from 'react';
import { gowunBatang } from './components/ui/fonts';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/onboarding');
  }, [router]);

  const routeToOnboarding = () => {
    setTimeout(() => {
      router.replace('/onboarding');
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
