'use client';

import { AxiosError } from 'axios';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getTripAPI } from '@/apis/trips';
import { getDiaryAPI } from '@/apis/diaries';
import { DiaryForm } from '@/app/components';
import { diaryWriteState } from '@/lib/store/diary';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  DiaryContent,
  DiaryEmotionType,
  DiaryWeatherType,
} from '@/models/diary.model';
import { isTimelineState } from '@/lib/store/ui';

const DiaryHeader = dynamic(
  () => import('@/app/components/trip/diary/common/header'),
  { ssr: false },
);

function DiaryDetailPage({
  params: { tripId, diaryId },
}: {
  params: { tripId: string; diaryId: string };
}) {
  const setWriteData = useSetRecoilState(diaryWriteState);
  const setIsTimeline = useSetRecoilState(isTimelineState);
  const { error: tripError } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId),
  });

  const { data, error: diaryError } = useQuery({
    queryKey: ['diary', diaryId],
    queryFn: () => getDiaryAPI(diaryId),
  });

  if (tripError instanceof AxiosError) {
    if (tripError.response?.status === 400) {
      redirect('/trip');
    }
  }

  if (diaryError instanceof AxiosError) {
    if (diaryError.response?.status === 400) {
      redirect('/trip');
    }
  }

  useEffect(() => {
    if (data) {
      const content = JSON.parse(data.content) as DiaryContent;
      setWriteData({
        title: data.title || '',
        emotion: data.mood as DiaryEmotionType,
        weather: data.weather as DiaryWeatherType,
      });
      setIsTimeline(content.type === 'TIMELINE');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col w-full h-full">
      <DiaryHeader />

      {data && <DiaryForm />}
    </div>
  );
}

export default DiaryDetailPage;
