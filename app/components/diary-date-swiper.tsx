'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import dayjs from 'dayjs';
import { gowunBatang } from './ui/fonts';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface DateObject {
  day: string;
  date: string;
}

function DiaryDateSwiper() {
  const [dates, setDates] = useState<DateObject[]>([]);
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const startDate = '2024-03-20T17:14:14.855Z';
  const finishDate = '2024-03-26T17:14:14.855Z';
  const minimumSlides = 6;

  useEffect(() => {
    const start = dayjs(startDate);
    const end = dayjs(finishDate);
    const datesArray = [];

    for (
      let date = start;
      date.isBefore(end) || date.isSame(end);
      date = date.add(1, 'day')
    ) {
      datesArray.push({
        day: date.format('ddd'),
        date: date.format('DD'),
      });
    }
    if (minimumSlides - datesArray?.length !== 0) {
      const x = minimumSlides - datesArray?.length;
      for (let i = 1; i <= x; i++) {
        datesArray.push({
          day: '',
          date: '',
        });
      }
      setDates(datesArray);
    } else {
      setDates(datesArray);
    }
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    setFirstVisibleIndex(swiper.activeIndex);
  };

  return (
    <div className="w-full h-57pxr flex items-center border-b border-[#e6e6e6]">
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        onSlideChange={handleSlideChange}
      >
        {dates.map((date, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center">
              <p
                className={`${gowunBatang.className} text-12pxr font-bold leading-[15px] ${firstVisibleIndex === index ? 'text-black' : 'text-[#d6d6d6]'}`}
              >
                {firstVisibleIndex === index ? '오늘' : date.day}
              </p>
              <p
                className={`text-20pxr font-bold leading-[25px] ${firstVisibleIndex === index ? 'text-black' : 'text-[#c1c1c1]'}`}
              >
                {date.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
        {minimumSlides - dates?.length !== 0 && (
          <SwiperSlide>
            <div className="w-40pxr h-40pxr" />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}

export default DiaryDateSwiper;
