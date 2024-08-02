'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { getDiaryAPI } from '@/apis/diaries';
import { getTripAPI } from '@/apis/trips';
import { IconNavigateLeft } from '@/app/components/icon';
import { gowunBatang } from '@/app/components/ui/fonts';
import useBoolean from '@/hooks/useBoolean';
import { getDayname } from '@/lib/utils/date';
import { dumpDiaryDetailData } from '@/lib/utils/dump';
import DiaryEmotionBox from './emotion-box';
import DiaryWeatherBox from './weather-box';
import DiaryCancelBottomSheet from './cancel-bottom-sheet';
import DiaryHeaderSubmitIcon from './header-submit-icon';
import DiaryHeaderOptionIcon from './header-option-icon';

function DiaryHeader({ editable = false }) {
  const { tripId, diaryId } = useParams();
  const params = useSearchParams();
  const router = useRouter();
  const [isOpen, , open, close] = useBoolean();

  const {
    data: { startDate },
  } = useSuspenseQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId as string),
  });

  const {
    data: { travelDate },
  } = useSuspenseQuery({
    queryKey: ['diary', diaryId],
    queryFn: () => {
      if (!diaryId) {
        return dumpDiaryDetailData;
      }
      return getDiaryAPI(diaryId as string);
    },
  });

  const date = travelDate || (params.get('date') as string);
  const dateObj = dayjs(date);
  const dayname = getDayname(startDate, date);

  const handleClickPrevIcon = () => {
    if (editable) {
      open();
    } else {
      router.push(`/trip/${tripId}?date=${date}`);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative flex items-center justify-center w-full pt-17pxr pb-20pxr">
          <div
            className="absolute left-16pxr top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handleClickPrevIcon}
          >
            <IconNavigateLeft />
          </div>

          <span
            className={`${gowunBatang.className} text-[#697A53] text-18pxr font-bold cursor-pointer`}
          >
            {dateObj.format('YYYY년 M월 D일')}
          </span>

          {editable ? <DiaryHeaderSubmitIcon /> : <DiaryHeaderOptionIcon />}
        </div>

        <div className="flex items-center justify-between w-full px-28pxr">
          <span
            className={`${gowunBatang.className} text-[#313131] text-24pxr`}
          >
            {dayname}
          </span>

          <div className="relative flex gap-12pxr">
            <DiaryEmotionBox editable={editable} />

            <DiaryWeatherBox editable={editable} />
          </div>
        </div>
      </div>

      <DiaryCancelBottomSheet isOpen={isOpen} onClose={close} />
    </>
  );
}

export default DiaryHeader;
