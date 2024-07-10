import { TripResponse } from '@/models/trip.model';
import TripMainItem from './item';

interface Props {
  data: TripResponse[];
}

function TripMainList({ data }: Props) {
  return (
    <div className="flex flex-col gap-35pxr w-full py-52pxr pl-57pxr pr-50pxr">
      {data.map((trip) => (
        <TripMainItem key={trip.id} {...trip} />
      ))}
    </div>
  );
}

export default TripMainList;
