import type { Config } from 'tailwindcss';

type AccType = Record<string, string>;

const range = (start: number, end: number): number[] => {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
};

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'check-icon': 'url("/icons/check.svg")',
        'onboarding-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, white 72.2%)',
        'trip-cover':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.71%, rgba(67, 67, 67, 0.51) 64.06%, rgba(17, 17, 17, 0.80) 100%)',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary100: '#EEF9E7',
        primary200: '#DDEEC5',
        primary300: '#AFC98D',
        primary400: '#8BA47B',
        primary500: '#506046',
        inputGray: '#686868',
        inputGreen: '#3E5C16',
        background: '#F8F7EE',
        mainPageBackground: '#EAF2E4',
        gray: '#b1b1b1',
        error: '#ff0000',
      },
      boxShadow: {
        dialog: '0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        button: '0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
        floatingButton: '0px 2px 10px rgba(0, 0, 0, 0.18)',
        tripViewBox: '-2px -2px 10px 0px rgba(0, 0, 0, 0.03)',
        trip: '2px -2px 5px 0px rgba(0, 0, 0, 0.10)',
        diaryOption: '0px 2px 8px 0px rgba(0, 0, 0, 0.25)',
        inquiryInput: '0px 0px 10px 0px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        showToast: {
          '0%': {
            transform: 'translateY(-40px)',
            opacity: '0',
          },
          '20%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        showBottomSheet: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        closeBottomSheet: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
        },
        fadeInBottom: {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeInTop: {
          '0%': {
            transform: 'translateY(-30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeInLeft: {
          '0%': {
            transform: 'translateX(-30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        fadeInRight: {
          from: {
            transform: 'translateX(30px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
      },
      animation: {
        showToast: 'showToast 2.5s',
        showBottomSheet: 'showBottomSheet 0.4s forwards',
        closeBottomSheet: 'closeBottomSheet 0.4s forwards',
        fadeInTop: 'fadeInTop 1.2s',
        fadeInBottom: 'fadeInBottom 1.2s',
        fadeInLeft: 'fadeInLeft 1.5s',
        fadeInRight: 'fadeInRight 1.5s',
      },
      dropShadow: {
        textShadow: '1px 4px 4px rgba(0, 0, 0, 0.16)',
        modalShadow:
          '0 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
