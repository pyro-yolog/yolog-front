'use client';

import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getTripAPI } from '@/apis/trips';
import { diaryWriteState } from '@/lib/store/diary';
import { DiaryForm } from '@/app/components';
import { isTimelineState } from '@/lib/store/ui';

const DiaryHeader = dynamic(
  () => import('@/app/components/trip/diary/common/header'),
  { ssr: false },
);

function DiaryWritePage({
  params: { tripId },
  searchParams: { date },
}: {
  params: { tripId: string };
  searchParams: { date?: string };
}) {
  const setWriteData = useResetRecoilState(diaryWriteState);
  const setIsTimeline = useResetRecoilState(isTimelineState);
  const { error } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId),
  });

  if (!date || isNaN(new Date(date).getTime())) {
    redirect('/trip');
  }

  if (error instanceof AxiosError) {
    if (error.response?.status === 400) {
      redirect('/trip');
    }
  }

  useEffect(() => {
    setWriteData();
    setIsTimeline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <DiaryHeader editable />

      <DiaryForm editable />
    </div>
  );
}

export default DiaryWritePage;
