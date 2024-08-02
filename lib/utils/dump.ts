import { DiaryDetailResponse } from '@/models/diary.model';

export const dumpDiaryDetailData: DiaryDetailResponse = {
  id: 0,
  title: '',
  content: JSON.stringify({ data: { content: '' } }),
  mood: '',
  weather: '',
  travelDate: '',
};
