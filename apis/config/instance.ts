import axios, { AxiosError } from 'axios';
import { getToken } from '@/lib/utils/token';
import { refreshTokenAPI } from '../token';

const baseURL = '/api';
const axiosInstance = axios.create({ baseURL, timeout: 1000 * 60 * 5 });

let errorCount = 0;

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.yolog) {
    const token = getToken();

    if (token) {
      if (errorCount) {
        config.headers['Authorization-refresh'] =
          `Bearer ${token.refreshToken}`;
      } else {
        config.headers['Authorization'] = `Bearer ${token.accessToken}`;
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
        const headers = await refreshTokenAPI();
        const accessToken = headers['authorization'];
        const refreshToken = headers['authorization-refresh'];

        if (accessToken && refreshToken) {
          const storage = JSON.parse(localStorage.yolog);
          storage.token = { accessToken, refreshToken };
          localStorage.yolog = JSON.stringify(storage);
        }

        location.reload();
      } catch (e) {
        location.href = '/';
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
