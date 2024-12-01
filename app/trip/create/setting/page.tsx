'use client';

import {
  Button,
  IconNavigateLeft,
  Input,
  TripCreateSettingPeriod,
  TripCreateSettingTitle,
} from '@/app/components';
import {
  TRIP_DESTINATION_VALIDATION,
  TRIP_NAME_VALIDATION,
} from '@/lib/constants/validation';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

function DiaryBookCreateSetting() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });
  const [step, setStep] = useState(-1);
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const [name, setName] = useState<string>();

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
        params.set('startDate', startDate);
      }

      if (endDate) {
        params.set('endDate', endDate);
      }

      router.push(`/trip/create/cover?${params}`);
    } else {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    setDestination(searchParams.get('destination') || '');
    setStartDate(searchParams.get('startDate') || undefined);
    setEndDate(searchParams.get('endDate') || undefined);
    setName(searchParams.get('name') || '');

    if (searchParams.get('startDate')) {
      setStep(2);
    } else if (searchParams.get('destination')) {
      setStep(1);
    } else {
      setStep(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (destination) {
      params.set('destination', destination);
    }

    if (startDate) {
      params.set('startDate', startDate);
    }

    if (endDate) {
      params.set('endDate', endDate);
    }

    if (name) {
      params.set('name', name);
    }

    router.replace(`/trip/create/setting?${params}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination, startDate, endDate, name]);

  return (
    <div className="flex flex-col justify-between gap-30pxr w-full h-full pt-21pxr">
      <Link href="/trip" className="px-8pxr">
        <IconNavigateLeft />
      </Link>

      <form
        className="flex flex-col justify-between w-full h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-28pxr w-full px-16pxr">
          <TripCreateSettingTitle step={step} />

          <div className="flex flex-col-reverse gap-28pxr">
            {step > -1 && (
              <div className="animate-fadeInRight">
                <Controller
                  name="destination"
                  control={control}
                  rules={TRIP_DESTINATION_VALIDATION}
                  defaultValue={destination}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => {
                    return (
                      <Input
                        id="destination"
                        title="여행지"
                        placeholder="여행지를 입력해주세요."
                        helpText="1~35자 입력할 수 있어요."
                        value={value}
                        error={error}
                        onChange={(e) => {
                          setDestination(e.target.value);
                          onChange(e);
                        }}
                      />
                    );
                  }}
                />
              </div>
            )}

            {step > 0 && (
              <TripCreateSettingPeriod
                startDate={startDate}
                endDate={endDate}
                onChangePeriod={handleChangePeriod}
              />
            )}

            {step === 2 && (
              <div className="animate-fadeInRight">
                <Controller
                  name="name"
                  control={control}
                  rules={TRIP_NAME_VALIDATION}
                  defaultValue={name}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <Input
                      id="name"
                      title="일기장 이름"
                      placeholder="일기장 이름을 입력해주세요."
                      helpText="1~17자 입력할 수 있어요."
                      value={value}
                      error={error}
                      onChange={(e) => {
                        setName(e.target.value);
                        onChange(e);
                      }}
                    />
                  )}
                />
              </div>
            )}
          </div>
        </div>

        <Button type="submit" disabled={isDisabled} angled>
          다음
        </Button>
      </form>
    </div>
  );
}

const DiaryBookCreateSettingPage = () => {
  return (
    <Suspense>
      <DiaryBookCreateSetting />
    </Suspense>
  );
};

export default DiaryBookCreateSettingPage;
