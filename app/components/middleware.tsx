'use client';

import { tokenState } from '@/lib/store/user';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

const Middleware = ({ children }: { children: JSX.Element }) => {
  const { accessToken } = useRecoilValue(tokenState);
  // const router = useRouter();
  const pathname = usePathname();

  // 로그인 사용자 확인
  if (
    accessToken &&
    [
      '/onboarding',
      '/sign',
      '/signup/profile',
      '/signup/terms',
      '/social-login',
    ].includes(pathname)
  ) {
    redirect('/');
  }

  // 비로그인 사용자 확인
  if (!accessToken && /^\/trip\/(.+)$/g.test(pathname)) {
    redirect('/');
  }

  return children;
};

export default Middleware;
