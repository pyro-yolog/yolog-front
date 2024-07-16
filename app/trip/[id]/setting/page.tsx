import { getTripAPI } from '@/apis/trips';
import {
  TripSettingCover,
  TripSettingDelete,
  TripSettingForm,
  IconNavigateLeft,
} from '@/app/components';
import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';

function TripSetting({ params: { id } }: { params: { id: string } }) {
  // const { data } = useSuspenseQuery({
  //   queryKey: ['trip', id],
  //   queryFn: () => getTripAPI(id as string),
  // });

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="relative w-full h-63pxr flex items-center justify-center border-b border-[#E5E5E5]">
        <Link href={`/trip/${id}`}>
          <IconNavigateLeft className="absolute top-1/2 left-8pxr -translate-y-1/2 cursor-pointer" />
        </Link>

        <span className="text-18pxr text-black font-semibold">설정</span>
      </div>

      <div className="flex flex-col justify-between gap-60pxr w-full h-[calc(100%-64px)] px-16pxr pt-27pxr pb-6pxr overflow-y-auto">
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
