import { atom } from 'recoil';
import localStorageEffect from './effects/localStorageEffect';

// 일기장 상세 페이지 - 날짜 목록
export const isOpenDatePickerState = atom({
  key: 'is-open-date-picker',
  default: false,
  effects_UNSTABLE: [localStorageEffect],
});

// 일기 작성 페이지 - 타임라인
export const isTimelineState = atom({
  key: 'is-timeline',
  default: false,
});
