export type DiaryEmotionType = 'HAPPY' | 'COMMON' | 'TIRED' | 'SAD' | 'ANGRY';
export type DiaryWeatherType = 'SUNNY' | 'CLOUDY' | 'RAINY' | 'SNOWY' | 'WINDY';

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
  date: string;
}

export interface DiaryCreateResponse {
  id: number;
  dayName: string;
  travelDate: string;
}
