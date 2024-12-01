import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { IToken } from './models/token.model';

export const middleware = (request: NextRequest, _: NextFetchEvent) => {
  const { pathname } = request.nextUrl;
  const { accessToken } = JSON.parse(
    request.cookies.get('token')?.value || '{}',
  ) as IToken;

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
    return NextResponse.rewrite(new URL('/', request.url));
  }

  // 비로그인 사용자 확인
  if (!accessToken && /^\/trip\/(.+)$/g.test(pathname)) {
    return NextResponse.rewrite(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/', '/trip/:path*', '/sign', '/signup/:path*', '/social-login'],
};

// http://localhost:3000/social-login?exist=true&Authorization=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcyNTg4ODEwMywiZW1haWwiOiJ0amRnbmwxMDA0QGdtYWlsLmNvbSJ9.lCxLtj3F1vPmPBubwx80pCEE2TBlzvFfoD4fpCYPSK5NF5HBq7GfD548gjspsY2M7HQe7_0nLf-1DLnObt10qg&Authorization-Refresh=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSZWZyZXNoVG9rZW4iLCJleHAiOjE3MjY0OTI5MDN9.trk7NayPK-NzZEKk1VNzPFx8IboUO9fQmQ7erQjGAMIOJphXBOF9KWRCDCvHFG8W67RIp0gT3MK7AvzIWjmv8A
