import Image from 'next/image';
import Button from './button';

interface Props {
  type: 'kakao' | 'naver' | 'google' | 'apple';
  onClick?: () => void;
}

function SocialButton({ type, onClick }: Props) {
  const buttonStyles = 'relative !text-16pxr font-semibold';
  const logoStyles = 'absolute top-1/2 left-33pxr -translate-y-1/2';

  const getStyles = () => {
    switch (type) {
      case 'kakao':
        return 'bg-[#FFEB3B] text-[#202020]';
      case 'naver':
        return 'bg-[#00BF18] text-[#202020]';
      case 'google':
        return 'bg-white text-[#202020] border border-solid border-[#eee]';
      case 'apple':
        return 'bg-black text-white';
    }
  };

  const getLogo = () => {
    switch (type) {
      case 'kakao':
        return (
          <Image
            className={logoStyles}
            src={`/images/kakao-logo.png`}
            alt="소셜 로그인 로고"
            width={29}
            height={30}
          />
        );
      case 'naver':
        return (
          <Image
            className={logoStyles}
            src={`/images/naver-logo.png`}
            alt="소셜 로그인 로고"
            width={33}
            height={30}
          />
        );
      case 'google':
        return (
          <Image
            className={logoStyles}
            src={`/images/google-logo.png`}
            alt="소셜 로그인 로고"
            width={25}
            height={25}
          />
        );
      case 'apple':
        return (
          <Image
            className={logoStyles}
            src={`/images/apple-logo.png`}
            alt="소셜 로그인 로고"
            width={18}
            height={22}
          />
        );
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'kakao':
        return '카카오톡으로';
      case 'naver':
        return 'Naver로';
      case 'google':
        return 'Google로';
      case 'apple':
        return 'Apple로';
    }
  };

  return (
    <Button styles={`${getStyles()} ${buttonStyles}`} onClick={onClick}>
      {getLogo()}
      {getLabel()} 계속하기
    </Button>
  );
}

export default SocialButton;
