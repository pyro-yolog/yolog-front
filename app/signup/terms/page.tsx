import { gowunBatang } from '@/app/components/ui/fonts';
import { SignupTermsForm } from '@/app/components';

function SignupPage() {
  return (
    <div className="h-full pb-13pxr flex flex-col gap-40pxr">
      <p
        className={`${gowunBatang.className} pt-40pxr text-23pxr leading-[38px] text-center text-inputGreen font-semibold`}
      >
        서비스 이용을 위해
        <br />
        약관에 동의해주세요
      </p>

      <SignupTermsForm />
    </div>
  );
}

export default SignupPage;
