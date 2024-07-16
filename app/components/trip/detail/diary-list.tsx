'use client';

import { DiaryResponse } from '@/models/diary.model';
import TripDetailDiaryItem from './diary-item';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Props {
  data: DiaryResponse[];
}

function TripDetailDiaryList({ data }: Props) {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-between min-h-full pb-17pxr w-full px-26pxr">
      <div className="flex flex-col gap-20pxr w-full py-17pxr">
        {data.map((diary) => (
          <TripDetailDiaryItem key={diary.id} {...diary} />
        ))}
      </div>

      <Link
        className="text-14pxr text-[#9A9A9A] font-medium cursor-pointer"
        href={`/trip/${id}/write`}
      >
        일기 추가
      </Link>
    </div>
  );
}

export default TripDetailDiaryList;
