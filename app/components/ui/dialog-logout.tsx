'use client';

import React from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';
import useToast from '@/hooks/useToast';

interface Props {
  onClose?: () => void;
}

function DialogLogout({ onClose }: Props) {
  const router = useRouter();
  const showToast = useToast();
  const handleLogout = () => {
    router.push('/onboarding');
    showToast({ message: '로그아웃 되었어요.', type: 'success' });
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-17pxr mb-8pxr font-semibold leading-[22px] tracking-[-0.4px]">
        로그아웃
      </h1>
      <p className="text-13pxr mb-20pxr leading-[18px] tracking-[-0.4px] text-center">
        로그아웃 상태에서 실수로 앱을 삭제하거나
        <br /> 기기를 바꾸면 기록이 저장되지 않습니다.
      </p>
      <div className="flex items-center gap-14pxr">
        <Button
          size="small"
          onClick={onClose}
          styles="bg-[#e3e3e3] text-[#9a9a9a] text-16pxr font-semibold leading-[24px] py-10pxr px-18pxr w-115pxr rounded-[15px]"
        >
          취소
        </Button>
        <Button
          size="small"
          onClick={handleLogout}
          styles="bg-primary300 text-white text-16pxr font-semibold leading-[24px] py-10pxr px-18pxr w-115pxr rounded-[15px]"
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
}

export default DialogLogout;
