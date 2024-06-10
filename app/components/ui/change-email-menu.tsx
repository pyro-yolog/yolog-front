import UseDialog from '@/hooks/use-dialog';
import SocialButton from './social-button';

type SocialType = 'google' | 'kakao' | 'naver' | 'apple';

function ChangeEmailMenu() {
  const currentSocialType = 'google'; // redux에서 가져올 예정
  const socialButtons: SocialType[] = ['google', 'kakao', 'naver', 'apple'];

  return (
    <div className="flex flex-col gap-16pxr mt-12pxr">
      {socialButtons
        .filter((button) => button !== currentSocialType)
        .map((filteredBtn) => (
          <SocialButton key={filteredBtn} type={filteredBtn} />
        ))}
    </div>
  );
}

export default ChangeEmailMenu;
