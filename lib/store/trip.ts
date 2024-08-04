import { TripResponse } from '@/models/trip.model';
import { atom } from 'recoil';

export const tripWriteState = atom<TripResponse | null>({
  key: 'trip-write',
  default: null,
});
