'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useRecoilState } from 'recoil';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getTripAPI } from '@/apis/trips';
import { getBetweenDateList } from '@/lib/utils/date';
import { IconCalendar, IconChevronDown } from '@/app/components/icon';
import { gowunBatang } from '@/app/components/ui/fonts';
import { isOpenDatePickerState } from '@/lib/store/ui';

function TripDetailDatePicker() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenDatePickerState);
  const { tripId } = useParams();
  const params = useSearchParams();
  const date = params.get('date') as string;
  const dateObj = dayjs(date);

  const {
    data: { startDate, finishDate },
  } = useSuspenseQuery({
    queryKey: ['trip', tripId],
    queryFn: () => getTripAPI(tripId as string),
  });

  const dateList = getBetweenDateList(startDate, finishDate);

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex justify-between pl-15pxr pr-24pxr pt-8pxr">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-32pxr text-[#696969] text-12pxr text-center font-semibold">
            {dateObj.month() + 1}월
          </span>

          <span style={{ transform: `rotateZ(${isOpen ? 0 : 180}deg)` }}>
            <IconChevronDown />
          </span>
        </div>

        <div>
          <IconCalendar />
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-nowrap gap-30pxr min-w-full px-15pxr py-8pxr border-b border-[#E6E6E6] overflow-x-auto scrollbar-hide transition-all">
          {dateList.map((date) => (
            <Link
              key={date.unix()}
              href={`?date=${date.format('YYYY-MM-DD')}`}
              className={`flex flex-col items-center flex-[0_0_38px] cursor-pointer transition-colors`}
              style={{ color: dateObj.isSame(date) ? 'black' : '#C1C1C1' }}
            >
              <span className={`${gowunBatang.className} text-12pxr font-bold`}>
                {date.format('ddd')}
              </span>
              <span className="text-20pxr font-bold">{date.date()}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default TripDetailDatePicker;
