export type DiaryEmotionType = 'HAPPY' | 'NORMAL' | 'TIRED' | 'UPSET' | 'ANGRY';
export type DiaryWeatherType = 'SUNNY' | 'CLOUDY' | 'RAIN' | 'SNOW' | 'WINDS';

export interface DiaryAdditionalData {
  type: string;
  image: string;
  text: string;
}

export interface DiaryEmotion extends DiaryAdditionalData {
  type: DiaryEmotionType;
}

export interface DiaryWeather extends DiaryAdditionalData {
  type: DiaryWeatherType;
}

export interface DiaryResponse {
  id: number;
  dayName: string;
  content: string;
  mood: string;
  weather: string;
  travelDate: string;
}

export interface DiaryDetailResponse extends DiaryResponse {
  title: string;
}

export interface DiaryCreateReqeust {
  title: string;
  content: string | null;
  travelDate: string;
  mood: string | null;
  weather: string | null;
}

export interface DiaryContent {
  type: 'DEFAULT' | 'TIMELINE';
  data: string;
}
