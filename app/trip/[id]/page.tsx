'use client';

import { AxiosError } from 'axios';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { TripDetailVisualLoading } from '@/app/components';
import { getTripAPI } from '@/apis/trips';

const TripDetailVisual = dynamic(
  () => import('@/app/components/trip/detail/visual'),
  { ssr: false, loading: () => <TripDetailVisualLoading /> },
);
const TripDetailDatePicker = dynamic(
  () => import('@/app/components/trip/detail/date-picker'),
  { ssr: false },
);
const TripDetailDiaryView = dynamic(
  () => import('@/app/components/trip/detail/diary-view'),
  { ssr: false },
);

function TripDetailPage({
  params: { id },
  searchParams: { date },
}: {
  params: { id: string };
  searchParams: { date?: string };
}) {
  const { error } = useQuery({
    queryKey: ['trip', id],
    queryFn: () => getTripAPI(id),
  });

  if (!date || isNaN(new Date(date).getTime())) {
    redirect('/trip');
  }

  if (error instanceof AxiosError) {
    if (error.response?.status === 404) {
      redirect('/trip');
    }
  }

  return (
    <div className="w-full h-full">
      <TripDetailVisual />

      <div className="relative flex flex-col w-full h-[calc(100%-162px)]">
        <TripDetailDatePicker />

        <TripDetailDiaryView />
      </div>
    </div>
  );
}

export default TripDetailPage;
