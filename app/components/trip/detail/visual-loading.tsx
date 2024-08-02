'use client';

import Link from 'next/link';
import { IconNavigateLeft, IconSetting } from '@/app/components/icon';
import { useParams } from 'next/navigation';

function TripDetailVisualLoading() {
  const { tripId } = useParams();

  return (
    <div className="relative flex flex-col gap-21pxr w-full h-162pxr pt-11pxr">
      <div className="absolute w-full h-full left-0pxr top-0pxr -z-10">
        <div className="w-full h-full bg-[#f3f3f3]" />
      </div>

      <div className="flex items-center justify-between px-16pxr">
        <Link href="/trip">
          <IconNavigateLeft />
        </Link>

        <Link href={`/trip/${tripId}/setting`}>
          <div className="flex items-center justify-center w-35pxr h-35pxr rounded-[5px] bg-white/30">
            <IconSetting />
          </div>
        </Link>
      </div>

      <div className="text-black flex flex-col px-32pxr">
        <div className="w-150pxr h-36pxr rounded-[4px] bg-[#ddd]" />

        <div className="mt-3pxr w-75pxr h-22pxr rounded-[4px] bg-[#ddd]" />

        <div className="mt-8pxr w-120pxr h-18pxr rounded-[4px] bg-[#ddd]" />
      </div>
    </div>
  );
}

export default TripDetailVisualLoading;
