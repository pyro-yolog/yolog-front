'use client';

import { SignupGowunTitle, SignupTermsForm } from '../../components';

function SignupPage() {
  return (
    <div className="bg-background h-full pb-13pxr flex flex-col gap-40pxr">
      <div className="flex flex-col items-center pt-47pxr">
        <SignupGowunTitle>
          서비스 이용을 위해
          <br />
          약관에 동의해주세요
        </SignupGowunTitle>
      </div>
      <SignupTermsForm />
    </div>
  );
}

export default SignupPage;
