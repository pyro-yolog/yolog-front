'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { tokenState } from '@/lib/store/user';
import { useRecoilState } from 'recoil';

function SocialLoginPage() {
  const [token, setToken] = useRecoilState(tokenState);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const accessToken = params.get('Authorization');

    if (accessToken) {
      setToken({ ...token, accessToken });
      router.replace('/signup/terms');
    } else {
      router.replace('/sign');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default SocialLoginPage;
