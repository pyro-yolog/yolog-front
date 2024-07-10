import axios from './config/instance';

const PREFIX = '/social-login';

export const socialLoginAPI = (nickname: string) => {
  return axios.post<boolean>(PREFIX, { nickname });
};
