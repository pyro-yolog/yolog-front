'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AppListener = () => {
  const router = useRouter();

  const handleMessageEvent = (e: any) => {
    const eventKey: string = e.data;

    if (eventKey === 'REDIRECT_BACK') {
      router.back();
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('message', handleMessageEvent);

    return () => {
      document.removeEventListener('message', handleMessageEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default AppListener;
