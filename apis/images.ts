import { ImageResponse } from '@/models/image.model';
import axios from './config/instance';

const PREFIX = '/images';

export const uploadImageAPI = (data: FormData) => {
  return axios.post<ImageResponse[]>(PREFIX, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
    maxBodyLength: 1024 * 1024 * 5,
    maxContentLength: 1024 * 1024 * 5,
  });
};
