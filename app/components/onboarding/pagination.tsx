'use client';

import { useSwiper } from 'swiper/react';
import { gowunBatang } from '../ui/fonts';

interface Props {
  index: number;
}

function OnboardingPagination({ index }: Props) {
  const swiper = useSwiper();

  return (
    <div className="flex flex-col items-center gap-12pxr">
      <span
        className={`${gowunBatang.className} text-primary500 text-17pxr font-bold`}
      >
        여록
      </span>

      <div className="flex gap-9pxr">
        {new Array(3).fill(0).map((_, i) => (
          <div
            key={i}
            className="w-6pxr h-6pxr rounded-full transition-colors cursor-pointer"
            style={{ backgroundColor: index === i ? '#99B17B' : '#E6E6E6' }}
            onClick={() => swiper.slideTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default OnboardingPagination;
