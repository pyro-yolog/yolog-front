import { SignupProfileForm } from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';

function SignupProfilePage() {
  return (
    <div className="h-full pb-13pxr flex flex-col justify-between gap-40pxr">
      <p
        className={`text-center ${gowunBatang.className} text-22pxr leading-[35px] tracking-[0.22px] pt-47pxr`}
      >
        프로필 이름만 입력하면
        <br />
        가입이 완료돼요
      </p>

      <SignupProfileForm />
    </div>
  );
}

export default SignupProfilePage;
