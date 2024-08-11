'use client';

import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { getTripAPI, updateTripAPI } from '@/apis/trips';
import {
  IconCheck,
  IconNavigateLeft,
  TripSettingCover,
  TripSettingForm,
} from '@/app/components';
import { tripWriteState } from '@/lib/store/trip';
import dynamic from 'next/dynamic';

const TripSettingDelete = dynamic(
  () => import('@/app/components/trip/setting/delete'),
  { ssr: false },
);

function TripSetting({ params: { tripId } }: { params: { tripId: string } }) {
  const router = useRouter();
  const [tripWriteData, setTripWriteData] = useRecoilState(tripWriteState);
  const { data, error } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId),
  });

  if (error instanceof AxiosError) {
    if (error.response?.status === 400) {
      redirect('/trip');
    }
  }

  const handleClickCheckIcon = async () => {
    if (!tripWriteData) return;

    try {
      await updateTripAPI(tripId, tripWriteData);

      router.push(`/trip/${tripId}?date=${tripWriteData.startDate}`);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (data) {
      setTripWriteData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="relative w-full h-63pxr flex items-center justify-center border-b border-[#E5E5E5]">
        <Link href={`/trip/${tripId}?date=${data?.startDate}`}>
          <IconNavigateLeft className="absolute top-1/2 left-8pxr -translate-y-1/2 cursor-pointer" />
        </Link>

        <span className="text-18pxr text-black font-semibold">설정</span>

        <div
          className="absolute right-24pxr top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleClickCheckIcon}
        >
          <IconCheck />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-60pxr w-full h-[calc(100%-64px)] px-16pxr pt-27pxr pb-6pxr overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-38pxr">
          <TripSettingCover />

          <TripSettingForm />
        </div>

        <TripSettingDelete />
      </div>
    </div>
  );
}

export default TripSetting;
