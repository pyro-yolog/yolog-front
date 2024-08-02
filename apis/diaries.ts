import {
  DiaryCreateReqeust,
  DiaryDetailResponse,
  DiaryRequest,
  DiaryResponse,
} from '@/models/diary.model';
import axios from './config/instance';

const PREFIX = '/diaries';

export const getDiaryAPI = async (diaryId: string | number) => {
  return (await axios.get<DiaryDetailResponse>(`${PREFIX}/${diaryId}`)).data;
};

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

export const deleteDiaryAPI = async (diaryId: string | number) => {
  return await axios.delete<void>(`${PREFIX}/${diaryId}`);
};

export const updateDiaryAPI = async (
  diaryId: string | number,
  data: DiaryRequest,
) => {
  return await axios.put<void>(`${PREFIX}/${diaryId}`, data);
};
