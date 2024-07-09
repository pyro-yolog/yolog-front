import { signIn } from 'next-auth/react';

type SocialType = 'kakao' | 'naver' | 'google' | 'apple';

interface ISocialButtons {
  id: number;
  type: SocialType;
  onClick: () => void;
}

export const SOCIAL_BUTTONS: ISocialButtons[] = [
  {
    id: 1,
    type: 'kakao',
    onClick: () => signIn('kakao', { redirectTo: '/' }),
  },
  {
    id: 2,
    type: 'naver',
    onClick: () => signIn('naver', { redirectTo: '/' }),
  },
  {
    id: 3,
    type: 'google',
    onClick: () => signIn('google', { redirectTo: '/' }),
  },
  {
    id: 4,
    type: 'apple',
    onClick: () => signIn('apple', { redirectTo: '/' }),
  },
];
