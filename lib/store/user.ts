import { atom } from 'recoil';
import localStorageEffect from './effects/localStorageEffect';
import { IToken } from '@/models/token.model';

export const tokenState = atom<IToken | null>({
  key: 'token',
  default: {
    accessToken: null,
    refreshToken: null,
  },
  effects_UNSTABLE: [localStorageEffect],
});
