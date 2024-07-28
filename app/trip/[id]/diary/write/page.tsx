'use client';

import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getTripAPI } from '@/apis/trips';
import { diaryWriteState } from '@/lib/store/diary';
import { DiaryWriteForm } from '@/app/components';

const DiaryWriteHeader = dynamic(
  () => import('@/app/components/trip/diary/write/header'),
  { ssr: false },
);

function DiaryWritePage({
  params: { id },
  searchParams: { date },
}: {
  params: { id: string };
  searchParams: { date?: string };
}) {
  const setWriteData = useResetRecoilState(diaryWriteState);
  const { error } = useQuery({
    queryKey: ['trip', id],
    queryFn: () => getTripAPI(id),
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
  }, [setWriteData]);

  return (
    <div className="flex flex-col w-full h-full">
      <DiaryWriteHeader />

      <DiaryWriteForm />
    </div>
  );
}

export default DiaryWritePage;
