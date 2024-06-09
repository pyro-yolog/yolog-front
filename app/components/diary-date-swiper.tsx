'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function DiaryDateSwiper() {
  // 월마다 날짜 다다른데
  return (
    <div className="w-full">
      <Swiper spaceBetween={13} slidesPerView={7}>
        <SwiperSlide className="absolute top-0pxr transform rotate-[30deg] z-50">
          날짜 1
        </SwiperSlide>
        <SwiperSlide>날짜 2</SwiperSlide>
        <SwiperSlide>날짜 3</SwiperSlide>
        <SwiperSlide>날짜 4</SwiperSlide>
        <SwiperSlide>날짜 5</SwiperSlide>
        <SwiperSlide>날짜 6</SwiperSlide>
        <SwiperSlide>날짜 7</SwiperSlide>
        <SwiperSlide>날짜 7</SwiperSlide>
        <SwiperSlide>날짜 7</SwiperSlide>
        <SwiperSlide>날짜 7</SwiperSlide>
        <SwiperSlide>날짜 7</SwiperSlide>
        <SwiperSlide>날짜 7</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DiaryDateSwiper;
