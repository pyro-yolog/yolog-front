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
