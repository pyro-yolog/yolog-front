'use client';

import dayjs from 'dayjs';
import Modal from '../modal';
import useDialog from '@/hooks/use-dialog';
import Calendar from '../calendar';

interface Props {
  startDate?: string;
  endDate?: string;
  onChangePeriod: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate?: string;
  }) => void;
}

function DiaryBookCreateSettingPeriod({
  startDate,
  endDate,
  onChangePeriod,
}: Props) {
  const { isDialogOpen, setIsDialogOpen, dialogOutsideClick, dialogRef } =
    useDialog();

  const inputText = () => {
    if (!startDate) {
      return '여행 기간을 선택해주세요.';
    }

    if (endDate) {
      return `${dayjs(startDate).format('YYYY.MM.DD')} - ${dayjs(endDate).format('YYYY.MM.DD')}`;
    }

    return dayjs(startDate).format('YYYY.MM.DD');
  };

  return (
    <>
      <div className="flex flex-col animate-fadeInRight">
        <span className="text-14pxr font-semibold text-gray">여행 기간</span>

        <div
          className={`pl-5pxr pb-5pxr mt-18pxr border-b-[3px] border-inputGray cursor-pointer text-17pxr font-semibold text-${startDate ? '[#626262]' : 'gray'}`}
          onClick={() => setIsDialogOpen(true)}
        >
          {inputText()}
        </div>
      </div>

      <Modal
        refEl={dialogRef}
        open={isDialogOpen}
        onOutsideClick={dialogOutsideClick}
      >
        <Calendar
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            onChangePeriod(date);
            setIsDialogOpen(false);
          }}
        />
      </Modal>
    </>
  );
}

export default DiaryBookCreateSettingPeriod;
