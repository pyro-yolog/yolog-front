import { IToken } from '@/models/token.model';

export const getToken = () => {
  if (localStorage.yolog) {
    const storage = JSON.parse(localStorage.yolog);

    return storage['token'] as IToken | null;
  }

  return null;
};
