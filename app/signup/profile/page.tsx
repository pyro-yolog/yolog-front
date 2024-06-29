'use client';

import { SignupGowunTitle, SignupProfileForm } from '@/app/components';

function SignupProfilePage() {
  return (
    <div className="bg-background h-full pb-13pxr flex flex-col justify-between gap-40pxr">
      <SignupGowunTitle className="pt-47pxr">
        프로필 이름만 입력하면
        <br />
        가입이 완료돼요
      </SignupGowunTitle>
      <SignupProfileForm />
    </div>
  );
}

export default SignupProfilePage;
