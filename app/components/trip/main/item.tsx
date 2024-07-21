import Image from 'next/image';
import Link from 'next/link';
import { TripResponse } from '@/models/trip.model';
import { diphylleia, gowunBatang } from '@/app/components/ui/fonts';
import { formatViewDate } from '@/lib/utils/date';

function TripMainItem({
  id,
  name,
  destination,
  startDate,
  finishDate,
  coverImageUrl,
  coverColor,
  spineColor,
}: TripResponse) {
  const color = coverColor || spineColor;

  return (
    <Link href={`/trip/${id}?date=${startDate}`}>
      <div className="flex w-full bg-white rounded-l-[10px] rounded-r-[29px] shadow-trip">
        <div
          className={`w-25pxr rounded-l-[10px] content-stretch`}
          style={{ backgroundColor: color }}
        />

        <div className="flex flex-col w-[calc(100%-25px)]">
          <div className="flex flex-col gap-10pxr pl-17pxr py-35pxr">
            <div className="flex flex-col">
              <p
                className={`${gowunBatang.className} text-30pxr font-bold`}
                style={{ color: color, filter: 'brightness(0.9)' }}
              >
                {name}
              </p>

              <p
                className={`${diphylleia.className} text-20pxr`}
                style={{ color: color, filter: 'brightness(0.9)' }}
              >
                {destination}
              </p>
            </div>

            <p className="text-[#6C6C6C] text-12pxr font-semibold">
              {formatViewDate(startDate)}{' '}
              {startDate !== finishDate && `- ${formatViewDate(finishDate)}`}
            </p>
          </div>

          <div className="relative w-full h-202pxr rounded-br-[29px] overflow-hidden shadow-trip">
            {coverImageUrl ? (
              <Image
                src={coverImageUrl ?? ''}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="100%"
                alt="trip-cover-image"
                fill
                priority
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: color, filter: 'brightness(1.1)' }}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TripMainItem;
