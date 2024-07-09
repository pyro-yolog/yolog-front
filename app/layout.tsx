import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { BackgroundColor, ToastContainer } from './components';
import { Providers } from '@/lib/Providers';

import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '여록: 여행을 기록하다',
  description: 'record your trip',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kr"
      className={`${pretendard.variable} flex items-center justify-center`}
    >
      <body
        className={`${pretendard.className} w-390pxr h-full`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ToastContainer />
          <BackgroundColor />

          {children}
        </Providers>
      </body>
    </html>
  );
}
