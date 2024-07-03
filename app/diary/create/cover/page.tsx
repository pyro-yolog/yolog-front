'use client';

import { DiaryCreateCoverForm } from '@/app/components';
import { Suspense } from 'react';

function DiaryBookCreateCover() {
  return (
    <Suspense>
      <DiaryCreateCoverForm />
    </Suspense>
  );
}

export default DiaryBookCreateCover;
