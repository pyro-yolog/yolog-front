'use client';

import { tokenState } from '@/lib/store/user';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useSetRecoilState } from 'recoil';

const WebviewPage = () => {
  const setToken = useSetRecoilState(tokenState);
  const router = useRouter();
  const params = useSearchParams();

  setToken({
    accessToken: params.get('accessToken'),
    refreshToken: params.get('refreshToken'),
  });

  router.replace('/trip');

  return <></>;
};

const Webview = () => {
  return (
    <Suspense>
      <WebviewPage />
    </Suspense>
  );
};

export default Webview;
