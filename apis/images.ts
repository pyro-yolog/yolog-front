import { ImageResposne } from '@/models/image.model';
import axios from './config/instance';

const PREFIX = '/images';

export const uploadImageAPI = (data: FormData) => {
  return axios.post<ImageResposne>(PREFIX, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
