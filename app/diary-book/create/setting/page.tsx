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
import { Controller, FieldValues, useForm } from 'react-hook-form';

function DiaryBookCreateSetting() {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });
  const [step, setStep] = useState(0);
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();

  const isDisabled = !isValid || (step > 0 && !startDate);

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
              <Controller
                name="name"
                control={control}
                rules={DIARY_BOOK_NAME_VALIDATION}
                render={({
                  field: { value = '', onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    id="name"
                    title="일기장 이름"
                    placeholder="일기장 이름을 입력해주세요."
                    helpText="1~17자 입력할 수 있어요."
                    value={value}
                    error={error}
                    onChange={onChange}
                  />
                )}
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
            <Controller
              name="destination"
              control={control}
              rules={TRAVEL_DESTINATION_VALIDATION}
              render={({
                field: { value = '', onChange },
                fieldState: { error },
              }) => (
                <Input
                  id="destination"
                  title="여행지"
                  placeholder="여행지를 입력해주세요."
                  helpText="1~35자 입력할 수 있어요."
                  value={value}
                  error={error}
                  onChange={onChange}
                />
              )}
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
