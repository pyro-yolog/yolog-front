'use client';

import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>{children}</RecoilRoot>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
