import {
  InquiryRequest,
  InquiryResponse,
  InquriyDetailResponse,
} from '@/models/inquiry.model';
import axios from './config/instance';

const PREFIX = '/inquiries';

export const getInquiryListAPI = async () => {
  return (await axios.get<InquiryResponse[]>(PREFIX)).data;
};

export const getInquiryAPI = async (id: number | string) => {
  return (await axios.get<InquriyDetailResponse>(`${PREFIX}/${id}`)).data;
};

export const createInquiryAPI = (data: InquiryRequest) => {
  return axios.post<void>(PREFIX, data);
};

export const deleteInquiryAPI = (id: number | string) => {
  return axios.delete<void>(`${PREFIX}/${id}`);
};
