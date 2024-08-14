import axios from './config/instance';

const PREFIX = '/trips';

// 토큰 재발급받는 API가 따로 존재하지 않음
export const refreshTokenAPI = async () => {
  return (await axios.get(PREFIX)).headers;
};
