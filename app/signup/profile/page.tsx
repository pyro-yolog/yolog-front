import { SignupProfileForm } from '@/app/components';
import { gowunBatang } from '@/app/components/ui/fonts';

function SignupProfilePage() {
  return (
    <div className="h-full pb-13pxr flex flex-col justify-between gap-40pxr">
      <p
        className={`${gowunBatang.className} pt-40pxr text-23pxr leading-[38px] text-center text-inputGreen font-semibold`}
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
