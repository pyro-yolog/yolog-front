'use client';

import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { socialLoginAPI } from '@/apis/social-login';
import { Button, Input } from '@/app/components';
import { PROFILE_NAME_VALIDATION } from '@/lib/constants/validation';

function SignupProfileForm() {
  const router = useRouter();
  const {
    handleSubmit,
    setError,
    control,
    formState: { isValid },
  } = useForm<FieldValues>({ mode: 'onChange' });

  const onSubmit = async ({ nickname }: FieldValues) => {
    try {
      const { data: isSuccess } = await socialLoginAPI(nickname);

      if (isSuccess) {
        router.push('/trip');
      } else {
        setError('nickname', { message: '이미 사용 중인 이름이에요.' });
      }
    } catch (e) {
      console.error(e);
      setError('nickname', { message: '서버 요청에 문제가 발생했어요.' });
    }
  };

  return (
    <form
      className="flex flex-col mx-17pxr justify-between h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="nickname"
        control={control}
        rules={PROFILE_NAME_VALIDATION}
        render={({
          field: { name, value = '', onChange },
          fieldState: { error },
        }) => (
          <Input
            id={name}
            title="프로필 이름"
            placeholder="프로필 이름을 입력해주세요."
            helpText={
              <>
                4~12자 이내로 입력해주세요.
                <br />
                이름은 14일에 한 번 변경할 수 있어요.
              </>
            }
            validText="사용할 수 있는 이름이에요."
            value={value}
            error={error}
            onChange={onChange}
            validStyle
          />
        )}
      />

      <Button disabled={!isValid}>가입 완료</Button>
    </form>
  );
}

export default SignupProfileForm;
