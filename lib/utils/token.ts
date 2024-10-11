import Cookies from 'js-cookie';
import { IToken } from '@/models/token.model';

export const getToken = () => {
  const token = Cookies.get('token');

  if (token) {
    return JSON.parse(token) as IToken;
  }

  return null;
};
