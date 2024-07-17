import {
  BottomSheet,
  Button,
  IconNavigateLeft,
  SocialButton,
} from '../../components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function OnboardingBottomSheet({ isOpen, onClose }: Props) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col w-full pt-24pxr pb-58pxr gap-35pxr">
        <div className="relative flex items-center justify-center">
          <span className="text-black text-18pxr font-semibold">
            기존 계정으로 로그인
          </span>

          <IconNavigateLeft
            className="absolute left-6pxr cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col gap-12pxr px-16pxr">
          <SocialButton type="kakao" />

          <SocialButton type="google" />

          {/* <SocialButton type="apple" /> */}
        </div>
      </div>
    </BottomSheet>
  );
}

export default OnboardingBottomSheet;
