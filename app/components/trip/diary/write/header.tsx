'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { useParams, useSearchParams } from 'next/navigation';
import { getTripAPI } from '@/apis/trips';
import { IconNavigateLeft } from '@/app/components/icon';
import { gowunBatang } from '@/app/components/ui/fonts';
import IconCheck from '@/app/components/ui/icon-check';
import useBoolean from '@/hooks/useBoolean';
import { diaryWriteState } from '@/lib/store/diary';
import { getDayname } from '@/lib/utils/date';
import DiaryWriteEmotionBox from './emotion-box';
import DiaryWriteWeatherBox from './weather-box';
import DiaryWriteCancelBottomSheet from './cancel-bottom-sheet';

function DiaryWriteHeader() {
  const { id } = useParams();
  const params = useSearchParams();
  const [isOpen, , open, close] = useBoolean();
  const writeData = useRecoilValue(diaryWriteState);

  const {
    data: { startDate },
  } = useSuspenseQuery({
    queryKey: ['trip', id],
    queryFn: () => getTripAPI(id as string),
  });

  const date = params.get('date') as string;
  const dateObj = dayjs(date);
  const dayname = getDayname(startDate, date);

  const handleClickCreateIcon = async () => {
    console.log(writeData);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative flex items-center justify-center w-full pt-17pxr pb-20pxr">
          <div
            className="absolute left-16pxr top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={open}
          >
            <IconNavigateLeft />
          </div>

          <span
            className={`${gowunBatang.className} text-[#697A53] text-18pxr font-bold cursor-pointer`}
          >
            {dateObj.format('YYYY년 M월 D일')}
          </span>

          <div
            className="absolute right-24pxr top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handleClickCreateIcon}
          >
            <IconCheck />
          </div>
        </div>

        <div className="flex items-center justify-between w-full px-28pxr">
          <span
            className={`${gowunBatang.className} text-[#313131] text-24pxr`}
          >
            {dayname}
          </span>

          <div className="relative flex gap-12pxr">
            <DiaryWriteEmotionBox />

            <DiaryWriteWeatherBox />
          </div>
        </div>
      </div>

      <DiaryWriteCancelBottomSheet isOpen={isOpen} onClose={close} />
    </>
  );
}

export default DiaryWriteHeader;
