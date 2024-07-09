'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { tokenState } from '@/lib/store/user';
import { useSetRecoilState } from 'recoil';

function SocialLoginPage() {
  const setToken = useSetRecoilState(tokenState);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const exist = params.get('exist') === 'true';
    const accessToken = params.get('Authorization');
    const refreshToken = params.get('Authorization-Refresh') || null;

    setToken({ accessToken, refreshToken });

    if (exist) {
      router.replace('/trip');
    } else {
      router.replace('/signup/terms');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default SocialLoginPage;
