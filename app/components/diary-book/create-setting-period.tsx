'use client';

import dayjs from 'dayjs';
import Modal from '../modal';
import Calendar from '../calendar';
import useBoolean from '@/hooks/useBoolean';
import Input from '../input';

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
  const [isOpen, , open, close] = useBoolean();

  const inputText = () => {
    if (!startDate) {
      return '';
    } else if (endDate) {
      return `${dayjs(startDate).format('YYYY.MM.DD')} - ${dayjs(endDate).format('YYYY.MM.DD')}`;
    }

    return dayjs(startDate).format('YYYY.MM.DD');
  };

  return (
    <>
      <div className="relative">
        <div
          className="absolute left-0 top-0 w-full h-full z-10 cursor-pointer"
          onClick={open}
        />

        <Input
          id="period"
          title="여행 기간"
          placeholder="여행 기간을 선택해주세요."
          value={inputText()}
          disabled
        />
      </div>

      <Modal isOpen={isOpen} onClose={close}>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            onChangePeriod(date);
            close();
          }}
        />
      </Modal>
    </>
  );
}

export default DiaryBookCreateSettingPeriod;
