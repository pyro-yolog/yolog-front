import { TripRequest, TripResponse } from '@/models/trip.model';
import axios from './config/instance';

const PREFIX = '/trips';

export const getTripListAPI = async () => {
  return (await axios.get<TripResponse[]>(PREFIX)).data;
};

export const getTripAPI = async (id: string | number) => {
  return (await axios.get<TripResponse>(`${PREFIX}/${id}`)).data;
};

export const createTripAPI = (data: TripRequest) => {
  return axios.post<void>(PREFIX, data);
};
