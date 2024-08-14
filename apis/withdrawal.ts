import axios from './config/instance';

const PREFIX = '/withdrawal';

export const withdrawalAPI = () => {
  return axios.delete<void>(PREFIX);
};
