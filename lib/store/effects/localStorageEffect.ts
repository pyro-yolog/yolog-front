import { recoilPersist } from 'recoil-persist';

const localStorage =
  typeof window === 'undefined' ? undefined : window.localStorage;

const { persistAtom: localStorageEffect } = recoilPersist({
  key: 'yolog',
  storage: localStorage,
});

export default localStorageEffect;
