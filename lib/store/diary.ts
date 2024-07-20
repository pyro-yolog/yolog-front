import { DiaryEmotionType, DiaryWeatherType } from '@/models/diary.model';
import { atom } from 'recoil';

export interface DiaryWriteData {
  emotion: DiaryEmotionType | null;
  weather: DiaryWeatherType | null;
  title: string;
  content: string;
}

export const diaryWriteState = atom<DiaryWriteData>({
  key: 'diary-write',
  default: {
    emotion: null,
    weather: null,
    title: '',
    content: '',
  },
});
