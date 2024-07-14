import { IToken } from '@/models/token.model';
import axios from 'axios';

const baseURL = '/api';

const axiosInstance = axios.create({ baseURL, timeout: 1000 * 60 * 5 });

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.yolog) {
    const storage = JSON.parse(localStorage.yolog);
    const token = storage['token'] as IToken | null;

    if (token && token.accessToken) {
      config.headers.Authorization = `Bearer ${token.accessToken}`;
    }
  }

  return config;
});

export default axiosInstance;
