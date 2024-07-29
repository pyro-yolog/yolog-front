'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getTripAPI } from '@/apis/trips';
import { IconNavigateLeft, IconSetting } from '@/app/components/icon';
import { gowunBatang } from '@/app/components/ui/fonts';
import { formatViewPeriod } from '@/lib/utils/date';
import Image from 'next/image';

function TripDetailVisual() {
  const { tripId } = useParams();
  const { data } = useSuspenseQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId as string),
  });

  return (
    data && (
      <div className="relative flex flex-col gap-21pxr w-full h-162pxr pt-11pxr">
        <div className="absolute w-full h-full left-0pxr top-0pxr -z-10">
          {data.coverImageUrl ? (
            <>
              <Image
                src={data.coverImageUrl}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="100%"
                alt="trip-image"
                fill
                priority
              />

              <div className="absolute w-full h-full bg-trip-cover" />
            </>
          ) : (
            <div
              className="w-full h-full"
              style={{ backgroundColor: data.coverColor }}
            />
          )}
        </div>

        <div className="flex items-center justify-between px-16pxr">
          <Link href="/trip">
            <IconNavigateLeft color={data.coverImageUrl ? 'white' : 'black'} />
          </Link>

          <Link href={`/trip/${tripId}/setting`}>
            <div className="flex items-center justify-center w-35pxr h-35pxr rounded-[5px] bg-white/30">
              <IconSetting />
            </div>
          </Link>
        </div>

        <div
          className={`${gowunBatang.className} text-${data.coverImageUrl ? 'white' : 'black'} flex flex-col px-32pxr`}
        >
          <p className="text-24pxr opacity-0 animate-[fadeInLeft_1.2s_0.2s_forwards]">
            {data.name}
          </p>

          <p className="text-15pxr mt-3pxr opacity-0 animate-[fadeInLeft_1.2s_0.5s_forwards]">
            {data.destination}
          </p>

          <p className="text-12pxr mt-8pxr opacity-0 animate-[fadeInLeft_1.2s_0.8s_forwards]">
            {formatViewPeriod(data.startDate, data.finishDate)}
          </p>
        </div>
      </div>
    )
  );
}

export default TripDetailVisual;
