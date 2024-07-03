'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function BackgroundColor() {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.querySelector('html');

    if (process.env.NODE_ENV === 'development') {
      const bodyEl = document.querySelector('body');

      if (bodyEl) {
        bodyEl.style.boxSizing = 'content-box';
        bodyEl.style.borderLeft = '3px solid red';
        bodyEl.style.borderRight = '3px solid red';
      }
    }

    if (el) {
      switch (pathname) {
        case '/':
          el.style.backgroundColor = '#A4BF82';
          return;
        case '/sign':
          el.style.backgroundColor = '#EDF6E1';
          return;
        default:
          el.style.backgroundColor = 'white';
      }
    }
  }, [pathname]);

  return <></>;
}

export default BackgroundColor;
