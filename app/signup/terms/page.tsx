import { gowunBatang } from '@/app/components/ui/fonts';
import { SignupTermsForm } from '@/app/components';

function SignupPage() {
  return (
    <div className="h-full pb-13pxr flex flex-col gap-40pxr">
      <p
        className={`text-center ${gowunBatang.className} text-22pxr leading-[35px] tracking-[0.22px] pt-47pxr`}
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
