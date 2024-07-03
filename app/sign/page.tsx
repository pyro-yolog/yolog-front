import Image from 'next/image';
import { SocialButton } from '../components';
import { gowunBatang } from '../components/ui/fonts';

function SignPage() {
  return (
    <div className="flex flex-col pt-47pxr pb-12pxr justify-between gap-27pxr w-full h-full">
      <div
        className={`relative ${gowunBatang.className} flex flex-auto flex-col gap-16pxr px-35pxr text-inputGreen`}
      >
        <p className="text-28pxr font-bold">
          여행의 모든 감동을
          <br />
          나만의 이야기로
          <br />
          기록해보세요.
        </p>

        <p className="text-18pxr">3초면 회원가입이 가능해요!</p>

        <div className="absolute left-0pxr bottom-0pxr flex flex-col items-end w-[90%]">
          <Image
            src="/images/sign2.png"
            alt="sign_image"
            width={42}
            height={42}
          />

          <Image
            src="/images/sign1.png"
            alt="sign_image"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="flex flex-col gap-12pxr px-16pxr">
        <SocialButton type="kakao" />

        <SocialButton type="google" />

        <SocialButton type="apple" />
      </div>
    </div>
  );
}

export default SignPage;
