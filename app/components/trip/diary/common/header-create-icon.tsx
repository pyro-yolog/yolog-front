'use client';

import { AxiosError } from 'axios';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { createDiaryAPI } from '@/apis/diaries';
import { IconCheck } from '@/app/components/icon';
import useToast from '@/hooks/useToast';
import { diaryWriteState } from '@/lib/store/diary';
import { isTimelineState } from '@/lib/store/ui';
import { DiaryContent } from '@/models/diary.model';

function DiaryHeaderCreateIcon() {
  const showToast = useToast();
  const { tripId } = useParams();
  const router = useRouter();
  const params = useSearchParams();
  const writeData = useRecoilValue(diaryWriteState);
  const isTimeline = useRecoilValue(isTimelineState);

  const date = params.get('date') as string;

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
        data,
      };
    } else {
      const data = {
        content: (document.querySelector('#write-box') as HTMLDivElement)
          .innerHTML,
      };

      content = {
        type: 'DEFAULT',
        data,
      };
    }

    try {
      await createDiaryAPI(tripId as string, {
        travelDate: date,
        title: writeData.title,
        content: JSON.stringify(content),
        mood: writeData.emotion,
        weather: writeData.weather,
      });

      router.push(`/trip/${tripId}?${params}`);
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
    <div
      className="absolute right-24pxr top-1/2 -translate-y-1/2 cursor-pointer"
      onClick={handleClickCreateIcon}
    >
      <IconCheck />
    </div>
  );
}

export default DiaryHeaderCreateIcon;
