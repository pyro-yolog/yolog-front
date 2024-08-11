import { IToken } from '@/models/token.model';
import axios, { AxiosError } from 'axios';
import { refreshTokenAPI } from '../token';

const baseURL = '/api';
const axiosInstance = axios.create({ baseURL, timeout: 1000 * 60 * 5 });

let errorCount = 0;

const getToken = () => {
  if (localStorage.yolog) {
    const storage = JSON.parse(localStorage.yolog);

    return storage['token'] as IToken | null;
  }

  return null;
};

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.yolog) {
    const token = getToken();

    if (token) {
      console.log(errorCount);
      if (errorCount) {
        config.headers['Authorization-refresh'] =
          `Bearer ${token.refreshToken}`;
      } else {
        config.headers.Authorization = `Bearer ${token.accessToken}`;
      }
    }
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error: AxiosError) => {
    errorCount++;

    if (error.response?.status === 401 && errorCount < 5) {
      try {
        const data = await refreshTokenAPI();
        console.log(data);
      } catch (e) {
        location.href = '/';
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
