'use client';

import { DiaryBookCreateCoverForm } from '@/app/components';
import { Suspense } from 'react';

function DiaryBookCreateCover() {
  return (
    <Suspense>
      <DiaryBookCreateCoverForm />
    </Suspense>
  );
}

export default DiaryBookCreateCover;
