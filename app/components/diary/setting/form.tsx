'use client';

import { Controller, useForm } from 'react-hook-form';
import { Input } from '@/app/components';
import {
  TRIP_DESTINATION_VALIDATION,
  TRIP_NAME_VALIDATION,
} from '@/lib/constants/validation';
import useBoolean from '@/hooks/useBoolean';
import DiarySettingCalendarModal from './calendar-modal';
import DiarySettingDateConfirmModal from './date-confirm-modal';

function DiarySettingForm() {
  const [isCalendarOpen, , openCalendar, closeCalendar] = useBoolean();
  const [isDateConfirmOpen, , openDateConfirm, closeDateConfrim] = useBoolean();
  const { control } = useForm({
    mode: 'onChange',
  });

  const startDate = '2024-06-01';

  const handleChangePeriod = ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate?: string;
  }) => {
    console.log(startDate, endDate);
  };

  return (
    <>
      <div className="flex flex-col gap-13pxr">
        <span className="pl-2pxr text-18pxr text-[#313131] font-semibold">
          일기장 정보 변경
        </span>

        <form className="flex flex-col gap-27pxr">
          <Controller
            name="name"
            control={control}
            rules={TRIP_NAME_VALIDATION}
            render={({
              field: { name, value = 'aa', onChange },
              fieldState: { error },
            }) => (
              <Input
                id={name}
                title="일기장 이름"
                helpText="1~17자 입력할 수 있어요."
                value={value}
                error={error}
                onChange={onChange}
                bgStyle
              />
            )}
          />

          <Controller
            name="destination"
            control={control}
            rules={TRIP_DESTINATION_VALIDATION}
            render={({
              field: { name, value = 'bb', onChange },
              fieldState: { error },
            }) => (
              <Input
                id={name}
                title="여행지"
                helpText="1~35자 입력할 수 있어요."
                value={value}
                error={error}
                onChange={onChange}
                bgStyle
              />
            )}
          />

          <div className="relative">
            <div
              className="absolute left-0 top-0 w-full h-full z-10 cursor-pointer"
              onClick={openCalendar}
            />

            <Input
              id="period"
              title="여행기간"
              value={startDate}
              disabled
              bgStyle
            />
          </div>
        </form>
      </div>

      <DiarySettingCalendarModal
        isOpen={isCalendarOpen}
        startDate={startDate}
        onClose={closeCalendar}
        onChange={handleChangePeriod}
      />

      <DiarySettingDateConfirmModal
        isOpen={isDateConfirmOpen}
        onClose={closeDateConfrim}
        onConfirm={() => {}}
      />
    </>
  );
}

export default DiarySettingForm;
