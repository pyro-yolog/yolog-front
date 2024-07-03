'use client';

import { gowunBatang } from '../ui/fonts';
import Button from '../ui/button';
import { useSwiper } from 'swiper/react';
import { useRouter } from 'next/navigation';
import useBoolean from '@/hooks/useBoolean';
import OnboardingBottomSheet from './bottom-sheet';

function OnboardingBottom() {
  const [isOpen, , open, close] = useBoolean();
  const router = useRouter();
  const swiper = useSwiper();

  const handleNextSlide = () => {
    if (swiper.isEnd) {
      router.push('/sign');
    }

    swiper.slideNext();
  };

  return (
    <>
      <div className="flex flex-col items-center gap-18pxr px-16pxr">
        <Button onClick={handleNextSlide}>다음</Button>

        <span
          className={`${gowunBatang.className} text-14pxr text-[#646464] underline cursor-pointer`}
          onClick={open}
        >
          기존 계정으로{' '}
          <strong className="text-primary400 underline">로그인</strong>
        </span>
      </div>

      <OnboardingBottomSheet isOpen={isOpen} onClose={close} />
    </>
  );
}

export default OnboardingBottom;
