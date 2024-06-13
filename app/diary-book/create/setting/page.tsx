'use client';

import {
  Button,
  DiaryBookCreateSettingPeriod,
  DiaryBookCreateSettingTitle,
  Input,
} from '@/app/components';
import {
  DIARY_BOOK_NAME_VALIDATION,
  TRAVEL_DESTINATION_VALIDATION,
} from '@/app/lib/constants/validation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

function DiaryBookCreateSetting() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: 'onSubmit',
  });
  const [step, setStep] = useState(0);
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const name = watch('name');
  const destination = watch('destination');

  const isDisabled =
    !isValid || destination === '' || name === '' || (step > 0 && !startDate);

  const handleChangePeriod = ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate?: string;
  }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onSubmit = (data: FieldValues) => {
    if (step === 2) {
      const params = new URLSearchParams(data);

      if (startDate) {
        params.append('startDate', startDate);
      }

      if (endDate) {
        params.append('endDate', endDate);
      }

      router.push(`/diary-book/create/cover?${params}`);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-screen pt-32pxr bg-white">
      <form
        className="flex flex-col justify-between w-full h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-28pxr w-full px-16pxr">
          <DiaryBookCreateSettingTitle step={step} />

          {step === 2 && (
            <div className="animate-fadeInRight">
              <Input
                type="text"
                registerName="name"
                title="일기장 이름"
                placeholder="일기장 이름을 입력해주세요."
                defaultMessage="1~17자 입력할 수 있어요."
                validMessage=""
                value={name}
                errors={errors}
                rules={DIARY_BOOK_NAME_VALIDATION}
                register={register}
              />
            </div>
          )}

          {step > 0 && (
            <DiaryBookCreateSettingPeriod
              startDate={startDate}
              endDate={endDate}
              onChangePeriod={handleChangePeriod}
            />
          )}

          <div className="animate-fadeInRight">
            <Input
              type="text"
              registerName="destination"
              title="여행지"
              placeholder="여행지를 입력해주세요."
              defaultMessage="1~35자 입력할 수 있어요."
              validMessage=""
              value={destination}
              errors={errors}
              rules={TRAVEL_DESTINATION_VALIDATION}
              register={register}
            />
          </div>
        </div>

        <Button type="submit" disabled={isDisabled} angled>
          다음
        </Button>
      </form>
    </div>
  );
}

export default DiaryBookCreateSetting;
