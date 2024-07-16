'use client';

import { useQuery } from '@tanstack/react-query';
import { getTripListAPI } from '@/apis/trips';
import TripMainEmpty from './empty';
import TripMainList from './list';

function TripMainView() {
  const { data } = useQuery({
    initialData: [],
    queryKey: ['trips'],
    queryFn: getTripListAPI,
  });

  return (
    <div className="w-full h-[calc(100%-65px)] bg-white rounded-t-[27px] shadow-tripViewBox overflow-y-auto scrollbar-hide">
      {data.length ? <TripMainList data={data} /> : <TripMainEmpty />}
    </div>
  );
}

export default TripMainView;
