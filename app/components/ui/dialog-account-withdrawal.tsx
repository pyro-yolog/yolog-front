'use client';

import { useRouter } from 'next/navigation';
import Button from './button';
import useToast from '@/hooks/use-toast';

interface Props {
  onClose: () => void;
}

function DialogAccountWithDrawal({ onClose }: Props) {
  const router = useRouter();
  const showToast = useToast();
  const handleClickWithdrawal = () => {
    router.push('/onboarding');
    showToast({ message: '계정 탈퇴를 완료했어요.', type: 'success' });
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-17pxr mb-8pxr font-semibold leading-[22px] tracking-[-0.4px]">
        계정 탈퇴
      </h1>
      <p className="text-13pxr mb-20pxr leading-[18px] tracking-[-0.4px] text-center">
        모든 데이터가 삭제되며 복구할 수 없습니다.
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
          onClick={handleClickWithdrawal}
          styles="bg-primary300 text-white text-16pxr font-semibold leading-[24px] py-10pxr px-18pxr w-115pxr rounded-[15px]"
        >
          탈퇴하기
        </Button>
      </div>
    </div>
  );
}

export default DialogAccountWithDrawal;
