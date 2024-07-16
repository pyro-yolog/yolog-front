'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { DiaryResponse } from '@/models/diary.model';
import { gowunBatang } from '@/app/components/ui/fonts';
import { IconSmile, IconSun } from '@/app/components/icon';

interface Props extends DiaryResponse {}

function TripDetailDiaryItem({ id, dayName, travelDate, content }: Props) {
  const { id: tripId } = useParams();

  return (
    <Link
      href={`/trip/${tripId}/diary/${id}`}
      className={`${gowunBatang.className} flex flex-col w-full bg-white border border-[#E3E3E3] rounded-[5px] px-16pxr`}
    >
      <div className="w-full flex justify-between pt-11pxr pb-13pxr border-b border-[#E3E3E3]">
        <div className="flex flex-col">
          <span className="text-24pxr text-[#343434] font-bold">{dayName}</span>

          <span className="text-[#696969] text-12pxr">
            {dayjs(travelDate).format('YYYY년 MM월 DD일')}
          </span>
        </div>

        <div className="flex gap-8pxr">
          <IconSmile />

          <IconSun />
        </div>
      </div>

      <div className="pt-15pxr pb-17pxr text-[12.5px] leading-[22px]">
        오늘은 내 인생에서 가장 기억에 남을 여행 중 하나가 시작된 날이다.
        하와이로의 여행. 하와이에 도착한 순간,특유의 꽃향기가 나를 반겼다.
        공항을 나서자 마자 보이는 푸른
      </div>
    </Link>
  );
}

export default TripDetailDiaryItem;
