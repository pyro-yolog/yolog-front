'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from '@/app/components';
import { PROFILE_NAME_VALIDATION } from '@/app/lib/constants/validation';

function SignupProfileForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <form
      className="flex flex-col mx-17pxr justify-between h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
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
