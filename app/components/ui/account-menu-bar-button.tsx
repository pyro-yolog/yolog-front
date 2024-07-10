import MENUS from '@/lib/constants/menus';
import Image from 'next/image';
import React from 'react';

type SocialType = 'google' | 'kakao' | 'naver' | 'apple';
interface Props {
  socialType: SocialType;
  onClick: (menu: string) => void;
}

function AccountMenuBarButton({ socialType, onClick }: Props) {
  const getSocialInfo = () => {
    switch (socialType) {
      case 'google':
        return {
          image: '/images/google-logo.png',
          title: 'Google',
        };
      case 'kakao':
        return {
          image: '/images/kakao-logo.png',
          title: 'Kakao',
        };
      case 'naver':
        return {
          image: '/images/naver-logo.png',
          title: 'Naver',
        };
      case 'apple':
        return {
          image: '/images/apple-logo.png',
          title: 'Apple',
        };
    }
  };
  return (
    <div className="flex justify-between w-full items-center border-b border-[#EAEAEA] py-25pxr pl-21pxr">
      <div className="flex gap-14pxr">
        <Image
          alt="소셜로고"
          src={getSocialInfo().image}
          width={24}
          height={24}
        />
        <p className="text-16pxr font-semibold">
          {getSocialInfo().title}로 로그인 됨
        </p>
      </div>
      <button
        onClick={() => onClick(MENUS.changeEmail)}
        className="w-77pxr h-29pxr rounded-lg bg-primary300 text-13pxr font-semibold"
      >
        변경하기
      </button>
    </div>
  );
}

export default AccountMenuBarButton;
