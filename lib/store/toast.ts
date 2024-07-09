import { atom } from 'recoil';

export interface IToast {
  id?: number;
  message: string;
  type: 'error' | 'success' | 'default';
}

export const toastState = atom<IToast[]>({
  key: 'toast',
  default: [],
});
