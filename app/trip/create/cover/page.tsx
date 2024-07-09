'use client';

import { TripCreateCoverForm } from '@/app/components';
import { Suspense } from 'react';

function DiaryBookCreateCover() {
  return (
    <Suspense>
      <TripCreateCoverForm />
    </Suspense>
  );
}

export default DiaryBookCreateCover;
