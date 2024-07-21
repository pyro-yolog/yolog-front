import { atom } from 'recoil';
import localStorageEffect from './effects/localStorageEffect';

export const isOpenDatePickerState = atom({
  key: 'is-open-date-picker',
  default: false,
  effects_UNSTABLE: [localStorageEffect],
});
