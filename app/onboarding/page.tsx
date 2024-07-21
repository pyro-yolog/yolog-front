'use client';

import { OnboardingBottom, OnboardingPagination } from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';

function OnboardingPage() {
  const [index, setIndex] = useState(0);

  return (
    <div id="onboarding" className="h-full pt-34pxr pb-16pxr">
      <Swiper
        className="w-full h-full"
        effect="fade"
        modules={[EffectFade, Pagination]}
        fadeEffect={{ crossFade: true }}
        onSlideChange={(swiper: SwiperClass) => setIndex(swiper.activeIndex)}
        centeredSlides
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-between h-full">
            <div
              className={`${gowunBatang.className} text-26pxr text-[#32301C] font-bold text-center`}
            >
              여행지별 맞춤
              <br />
              일기장을 생성해요
            </div>

            <Image
              src="/images/onboarding1.png"
              alt="onboarding_image"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto' }}
              sizes="100vw"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex flex-col items-center justify-between px-58pxr h-full">
            <div
              className={`${gowunBatang.className} text-26pxr text-[#32301C] font-bold text-center`}
            >
              사진과 동영상으로
              <br />
              생생하게 기록해요
            </div>

            <Image
              src="/images/onboarding2.png"
              alt="onboarding_image"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto', marginTop: 32 }}
              sizes="100vw"
              priority
            />

            <div className="absolute left-0pxr bottom-0pxr w-full h-93pxr bg-onboarding-gradient" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex flex-col items-center px-25pxr justify-between h-full">
            <div
              className={`${gowunBatang.className} text-26pxr text-[#32301C] font-bold text-center`}
            >
              시간순으로 여행
              <br />
              이야기를 정리해요
            </div>

            <Image
              src="/images/onboarding3.png"
              alt="onboarding_image"
              width={0}
              height={0}
              style={{ width: '100%', height: 'auto', marginTop: 16 }}
              sizes="100vw"
              priority
            />

            <div className="absolute left-0pxr bottom-0pxr w-full h-93pxr bg-onboarding-gradient" />
          </div>
        </SwiperSlide>

        <div className="flex flex-col gap-40pxr">
          <OnboardingPagination index={index} />

          <OnboardingBottom />
        </div>
      </Swiper>
    </div>
  );
}

export default OnboardingPage;
