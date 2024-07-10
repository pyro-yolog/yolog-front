export interface TripRequest {
  name: string;
  destination: string;
  coverImageUrl?: string;
  colorCover?: string;
  startDate: string;
  finishDate: string;
}

export interface TripResponse extends TripRequest {
  id: number;
}
