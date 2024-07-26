'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
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
import { isTimelineState } from '@/lib/store/ui';
import { DiaryContent } from '@/models/diary.model';
import useToast from '@/hooks/useToast';
import { createDiaryAPI } from '@/apis/diaries';

function DiaryWriteHeader() {
  const showToast = useToast();
  const router = useRouter();
  const { id } = useParams();
  const params = useSearchParams();
  const [isOpen, , open, close] = useBoolean();
  const writeData = useRecoilValue(diaryWriteState);
  const isTimeline = useRecoilValue(isTimelineState);

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
    let content: DiaryContent | null = null;

    if (isTimeline) {
      const data = Array.from(document.querySelectorAll('.timeline-box')).map(
        (el) => {
          return {
            time: (el.querySelector('input') as HTMLInputElement).value,
            content: (el.querySelector('.write-box') as HTMLDivElement)
              .innerHTML,
          };
        },
      );

      content = {
        type: 'TIMELINE',
        data: JSON.stringify(data),
      };
    } else {
      const data = {
        content: (document.querySelector('#write-box') as HTMLDivElement)
          .innerHTML,
      };

      content = {
        type: 'DEFAULT',
        data: JSON.stringify(data),
      };
    }

    try {
      await createDiaryAPI(id as string, {
        travelDate: date,
        title: writeData.title,
        content: JSON.stringify(content),
        mood: writeData.emotion,
        weather: writeData.weather,
      });

      router.push(`/trip/${id}?${params}`);
    } catch (e) {
      if (e instanceof AxiosError) {
        showToast({
          type: 'error',
          message: '일기를 저장하는 도중 오류가 발생했어요!',
        });
      }
      console.error(e);
    }
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
