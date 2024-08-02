'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { gowunBatang } from '@/app/components/ui/fonts';
import { IconSmile, IconSun } from '@/app/components/icon';
import { getTripAPI } from '@/apis/trips';
import { DiaryContent, DiaryResponse } from '@/models/diary.model';
import { getDayname } from '@/lib/utils/date';
import { getImageList, getPreviewContent } from '@/lib/utils/diary';

interface Props extends DiaryResponse {}

function TripDetailDiaryItem({
  id,
  travelDate,
  content,
  mood,
  weather,
}: Props) {
  const { tripId } = useParams();
  const {
    data: { startDate },
  } = useSuspenseQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId as string),
  });
  const contentData: DiaryContent = JSON.parse(content);
  const imgList = getImageList(contentData);
  const showImgCount = Math.min(2, imgList.length);
  const moreImgCount = imgList.length - showImgCount;

  return (
    <Link
      href={`/trip/${tripId}/diary/${id}`}
      className={`${gowunBatang.className} flex flex-col w-full bg-white border border-[#E3E3E3] rounded-[5px] px-16pxr`}
    >
      <div className="w-full flex justify-between pt-11pxr pb-13pxr border-b border-[#E3E3E3]">
        <div className="flex flex-col">
          <span className="text-24pxr text-[#343434] font-bold">
            {getDayname(startDate, travelDate)}
          </span>

          <span className="text-[#696969] text-12pxr">
            {dayjs(travelDate).format('YYYY년 MM월 DD일')}
          </span>
        </div>

        <div className="flex gap-8pxr">
          <IconSmile color={mood ? '#8BA47B' : '#B1B1B1'} />

          <IconSun color={weather ? '#8BA47B' : '#B1B1B1'} />
        </div>
      </div>

      {imgList.length > 0 && (
        <div className="relative flex mt-10pxr w-full h-106pxr rounded-[5px] overflow-hidden">
          {imgList.slice(0, 2).map((src, i) => (
            <div
              className={`${showImgCount === 2 ? 'w-1/2' : 'w-full'} relative`}
              key={i}
            >
              <Image
                src={src}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="100%"
                alt="diary-cover-image"
                fill
                priority
              />
            </div>
          ))}

          {moreImgCount > 0 && (
            <div className="absolute top-0pxr right-0pxr w-1/2 h-full bg-black/50 flex items-center justify-center text-24pxr text-white tracking-[16px]">
              +{moreImgCount}
            </div>
          )}
        </div>
      )}

      <div
        className="pt-15pxr pb-17pxr text-[12.5px] leading-[22px]"
        dangerouslySetInnerHTML={{ __html: getPreviewContent(contentData) }}
      />
    </Link>
  );
}

export default TripDetailDiaryItem;
