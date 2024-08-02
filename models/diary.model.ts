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
  content: string;
  mood: string;
  weather: string;
  travelDate: string;
}

export interface DiaryDetailResponse extends DiaryResponse {
  title: string;
}

export interface DiaryRequest {
  title: string;
  content: string | null;
  mood: string | null;
  weather: string | null;
}

export interface DiaryCreateReqeust extends DiaryRequest {
  travelDate: string;
}

export interface DiaryContent {
  type: 'DEFAULT' | 'TIMELINE';
  data: DiaryContentData | DiaryContentData[];
}

export interface DiaryContentData {
  time?: string | null;
  content: string;
}
