'use client';

import { useResetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { withdrawalAPI } from '@/apis/withdrawal';
import { getSocialTypeAPI } from '@/apis/members';
import { SocialLogo, Viewer } from '@/app/components';
import { IconNavigateRight } from '@/app/components/icon';
import useBoolean from '@/hooks/useBoolean';
import { tokenState } from '@/lib/store/user';
import useToast from '@/hooks/useToast';
import MenuItem from './menu-items';
import LogoutModal from './logout-modal';
import RemoveModal from './remove-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AccountMenu = ({ isOpen, onClose }: Props) => {
  const [isOpenLogout, , openLogout, closeLogout] = useBoolean();
  const [isOpenRemove, , openRemove, closeRemove] = useBoolean();
  const resetToken = useResetRecoilState(tokenState);
  const router = useRouter();
  const showToast = useToast();

  const { data: socialData } = useQuery({
    queryKey: ['social-type'],
    queryFn: () => getSocialTypeAPI(),
  });

  const handleSubmitLogout = () => {
    resetToken();
    closeLogout();
    router.push('/');
  };

  const handleSubmitRemove = async () => {
    try {
      await withdrawalAPI();

      closeRemove();
      resetToken();
      router.push('/');
    } catch (e) {
      console.error(e);
      showToast({
        type: 'error',
        message: '탈퇴 요청하는 도중 오류가 발생했어요!',
      });
    }
  };

  const getSocialTypeText = () => {
    if (!socialData) return '';

    switch (socialData.socialType) {
      case 'GOOGLE':
        return 'Google로';
      case 'KAKAO':
        return '카카오톡으로';
    }
  };

  return (
    <>
      <Viewer isOpen={isOpen} onClose={onClose} title="계정">
        <div className="flex flex-col w-full pt-10pxr px-16pxr">
          <MenuItem>
            <div className="flex gap-14pxr">
              {socialData && <SocialLogo type={socialData.socialType} />}

              <span className="font-semibold">
                {getSocialTypeText()} 로그인 됨
              </span>
            </div>

            {/* <button
              className="py-6pxr px-16pxr text-13pxr font-semibold bg-primary300 rounded-[8px]"
              onClick={open}
            >
              변경하기
            </button> */}
          </MenuItem>

          <MenuItem onClick={openLogout}>
            <span className="font-semibold">로그아웃</span>

            <IconNavigateRight />
          </MenuItem>

          <MenuItem onClick={openRemove}>
            <span className="font-semibold">계정 탈퇴</span>

            <IconNavigateRight />
          </MenuItem>
        </div>
      </Viewer>

      <LogoutModal
        isOpen={isOpenLogout}
        onClose={closeLogout}
        onSubmit={handleSubmitLogout}
      />

      <RemoveModal
        isOpen={isOpenRemove}
        onClose={closeRemove}
        onSubmit={handleSubmitRemove}
      />
    </>
  );
};

export default AccountMenu;
