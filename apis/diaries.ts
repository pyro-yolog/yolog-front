import { DiaryCreateReqeust, DiaryResponse } from '@/models/diary.model';
import axios from './config/instance';

const PREFIX = '/diaries';

export const getDiaryListByDateAPI = async (
  tripId: string | number,
  date: string,
) => {
  return (await axios.get<DiaryResponse[]>(`${PREFIX}/${tripId}/days/${date}`))
    .data;
};

export const createDiaryAPI = async (
  tripId: string | number,
  data: DiaryCreateReqeust,
) => {
  return (await axios.post<void>(`${PREFIX}/${tripId}`, data)).data;
};
