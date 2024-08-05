import {
  TripOutOfDurationRequest,
  TripOutOfDurationResponse,
  TripRequest,
  TripResponse,
} from '@/models/trip.model';
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

export const updateTripAPI = (id: string | number, data: TripRequest) => {
  return axios.put<void>(`${PREFIX}/${id}`, data);
};

export const deleteTripAPI = (id: string | number) => {
  return axios.delete<void>(`${PREFIX}/${id}`);
};

export const outOfDurationTripAPI = async (
  id: string | number,
  data: TripOutOfDurationRequest,
) => {
  return (
    await axios.get<TripOutOfDurationResponse>(
      `${PREFIX}/out-of-duration/${id}?${new URLSearchParams(data)}`,
    )
  ).data;
};
