import Image from 'next/image';

interface Props {
  type: 'APPLE' | 'GOOGLE' | 'KAKAO';
  size?: number;
}

const SocialLogo = ({ type, size = 25 }: Props) => {
  const logoSrc = () => {
    switch (type) {
      case 'APPLE':
        return '/images/apple-logo.png';
      case 'GOOGLE':
        return '/images/google-logo.png';
      case 'KAKAO':
        return '/images/kakao-logo.png';
    }
  };

  return <Image src={logoSrc()} width={size} height={size} alt="social-logo" />;
};

export default SocialLogo;
