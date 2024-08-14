export interface InquiryResponse {
  id: number;
  title: string;
  createdAt: string;
  isAnswered: boolean;
}

export interface InquriyDetailResponse extends InquiryResponse {
  answer: string;
  content: string;
}

export interface InquiryRequest {
  title: string;
  content: string;
  imageUrls: string[];
}
