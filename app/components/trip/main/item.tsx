import { TripResponse } from '@/models/trip.model';

function TripMainItem({ id }: TripResponse) {
  return <div>{id}</div>;
}

export default TripMainItem;
