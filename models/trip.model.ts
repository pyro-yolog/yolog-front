export interface TripRequest {
  name: string;
  destination: string;
  coverImageUrl?: string;
  coverColor?: string;
  spineColor?: string;
  startDate: string;
  finishDate: string;
}

export interface TripResponse extends TripRequest {
  id: number;
}
