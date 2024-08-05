'use client';

import { useParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { outOfDurationTripAPI } from '@/apis/trips';
import { Input } from '@/app/components';
import {
  TRIP_DESTINATION_VALIDATION,
  TRIP_NAME_VALIDATION,
} from '@/lib/constants/validation';
import useBoolean from '@/hooks/useBoolean';
import TripSettingCalendarModal from './calendar-modal';
import TripSettingDateConfirmModal from './date-confirm-modal';
import { formatViewPeriod } from '@/lib/utils/date';
import { tripWriteState } from '@/lib/store/trip';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

function TripSettingForm() {
  const { tripId } = useParams();
  const [writeData, setWriteData] = useRecoilState(tripWriteState);
  const [tempPeriod, setTempPeriod] = useState({ startDate: '', endDate: '' });
  const [outOfDuration, setOutOfDuration] = useState(false);

  const [isCalendarOpen, , openCalendar, closeCalendar] = useBoolean();
  const [isDateConfirmOpen, , openDateConfirm, closeDateConfirm] = useBoolean();
  const { control } = useForm({
    mode: 'onChange',
  });

  const handleChangePeriod = async ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate?: string;
  }) => {
    if (!endDate) {
      endDate = startDate;
    }

    try {
      const { outOfDuration } = await outOfDurationTripAPI(tripId as string, {
        startDate,
        finishDate: endDate,
      });

      setTempPeriod({ startDate, endDate });
      setOutOfDuration(outOfDuration);
    } catch (e) {
      console.error(e);
    }

    closeCalendar();
  };

  const handleConfirmPeriod = () => {
    if (!writeData) return;

    setWriteData({
      ...writeData,
      startDate: tempPeriod.startDate,
      finishDate: tempPeriod.endDate,
    });
    setTempPeriod({ startDate: '', endDate: '' });

    closeDateConfirm();
  };

  useEffect(() => {
    if (tempPeriod.startDate && tempPeriod.endDate) {
      if (outOfDuration) {
        openDateConfirm();
      } else {
        handleConfirmPeriod();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempPeriod, outOfDuration]);

  if (!writeData) return null;

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
              field: { name, value = writeData.name, onChange },
              fieldState: { error },
            }) => (
              <Input
                id={name}
                title="일기장 이름"
                helpText="1~17자 입력할 수 있어요."
                value={value}
                error={error}
                onChange={(e) => {
                  setWriteData({ ...writeData, [name]: e.target.value });
                }}
                bgStyle
              />
            )}
          />

          <Controller
            name="destination"
            control={control}
            rules={TRIP_DESTINATION_VALIDATION}
            render={({
              field: { name, value = writeData.destination, onChange },
              fieldState: { error },
            }) => (
              <Input
                id={name}
                title="여행지"
                helpText="1~35자 입력할 수 있어요."
                value={value}
                error={error}
                onChange={(e) => {
                  setWriteData({ ...writeData, [name]: e.target.value });
                }}
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
              value={formatViewPeriod(
                writeData.startDate,
                writeData.finishDate,
              )}
              disabled
              bgStyle
            />
          </div>
        </form>
      </div>

      <TripSettingCalendarModal
        isOpen={isCalendarOpen}
        startDate={writeData.startDate}
        endDate={writeData.finishDate}
        onClose={closeCalendar}
        onChange={handleChangePeriod}
      />

      <TripSettingDateConfirmModal
        isOpen={isDateConfirmOpen}
        onClose={closeDateConfirm}
        onConfirm={handleConfirmPeriod}
      />
    </>
  );
}

export default TripSettingForm;
