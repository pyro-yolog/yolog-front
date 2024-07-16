'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useSearchParams, useParams } from 'next/navigation';
import { getDiaryListByDateAPI } from '@/apis/diaries';
import TripDetailDiaryListEmpty from './diary-list-empty';
import TripDetailDiaryList from './diary-list';

function TripDetailDiaryView() {
  const { id } = useParams();
  const params = useSearchParams();
  const date = params.get('date') as string;

  const { data } = useSuspenseQuery({
    queryKey: ['trip-diaries', id, date],
    queryFn: () => getDiaryListByDateAPI(id as string, date),
  });

  return (
    <div className="flex-auto w-full overflow-y-auto scrollbar-hide">
      {data.length > 0 ? (
        <TripDetailDiaryList data={data} />
      ) : (
        <TripDetailDiaryListEmpty />
      )}
    </div>
  );
}

export default TripDetailDiaryView;
