import { atom } from 'recoil';
import { IToken } from '@/models/token.model';
import cookieEffect from './effects/cookieEffect';

export const tokenState = atom<IToken>({
  key: 'token',
  default: {
    accessToken: null,
    refreshToken: null,
  },
  effects_UNSTABLE: [cookieEffect('token')],
});
