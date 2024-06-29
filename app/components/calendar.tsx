'use client';

import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useMemo, useState } from 'react';
import Button from './ui/button';
import { IconChevronLeft, IconChevronRight } from './icon';

dayjs.extend(isBetween);

interface DateProps {
  startDate: string;
  endDate?: string;
}

interface Props {
  startDate?: string;
  endDate?: string;
  onChange?: (date: DateProps) => void;
}

interface DateData {
  obj: Dayjs;
  selected: boolean;
  date: string;
  className: string;
}

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];
const DATE_DATA_FORMAT = 'YYYY-MM-DD';
const DATE_TEXT_FORMAT = 'YYYY년 M월 D일';

function Calendar({ startDate, endDate, onChange }: Props) {
  const [start, setStart] = useState(dayjs(startDate));
  const [end, setEnd] = useState<Dayjs | null>(endDate ? dayjs(endDate) : null);
  const [viewDate, setViewDate] = useState(start);
  const [cursor, setCursor] = useState(!!end); // true - 시작 날짜, false - 마지막 날짜

  const getTitle = () => {
    if (end) {
      return `${start.format(DATE_TEXT_FORMAT)} - ${end.format(DATE_TEXT_FORMAT)}`;
    }
    return start.format(DATE_TEXT_FORMAT);
  };

  const dateList = useMemo(() => {
    const list: DateData[][] = [];
    const viewStart = dayjs(viewDate).date(1).day(0).format('YYYY-MM-DD');
    const defaultStyles =
      'w-34pxr h-34pxr cursor-pointer rounded-full relative';
    const notCurrentMonthStyles = 'text-[#898A8D]';
    const betweenStyles = 'bg-primary200 rounded-none';
    const selectorStyles =
      'before:content-[""] before:absolute before:w-50pxr before:h-full before:bg-primary200 before:left-[-8px]';

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const obj = dayjs(viewStart).add(i * 7 + j, 'day');
        const selected = obj.isSame(start, 'date') || obj.isSame(end, 'date');
        let className = [defaultStyles];

        if (!viewDate.isSame(obj, 'month')) {
          className.push(notCurrentMonthStyles);
        }

        if (start && end) {
          if (obj.isSame(start, 'date')) {
            className.push(selectorStyles, 'before:left-[17px]');

            if (obj.day() === 6) {
              className.push('before:w-[17px]');
            }
          }

          if (obj.isSame(end, 'date')) {
            className.push(selectorStyles, 'before:w-[25px]');

            if (obj.day() === 0) {
              className.push('before:left-[0px]');
            }
          }
        }

        if (obj.isBetween(start, end)) {
          className.push(betweenStyles, selectorStyles);

          if (obj.day() === 0) {
            className.push('before:left-[0px]');
          }

          if (obj.day() === 0 || obj.day() === 6) {
            className.push('before:w-[42px]');
          }
        }

        row.push({
          obj,
          selected,
          className: className.join(' '),
          date: obj.format('YYYY-MM-DD'),
        });
      }
      list.push(row);
    }

    return list;
  }, [start, end, viewDate]);

  const handleClickDate = ({ obj }: DateData) => {
    if (obj.isSame(start) || obj.isSame(end)) return;

    if (obj.isBefore(start) || obj.isAfter(end)) {
      setStart(obj);
      setEnd(null);
      setCursor(false);
    } else {
      if (cursor) {
        setStart(obj);
      } else {
        setEnd(obj);
      }

      setCursor(!cursor);
    }

    setViewDate(obj);
  };

  const handleClickButton = () => {
    onChange &&
      onChange({
        startDate: start.format(DATE_DATA_FORMAT),
        endDate: end ? end.format(DATE_DATA_FORMAT) : undefined,
      });
  };

  return (
    <div className="flex flex-col items-center w-357pxr p-14pxr bg-white rounded-[15px]">
      <span className="text-17pxr font-semibold leading-[37px] tracking-[-0.4px]">
        {getTitle()}
      </span>

      <div className="flex justify-between gap-34pxr mt-7pxr">
        <div className="flex justify-between w-128pxr">
          <span
            className="cursor-pointer"
            onClick={() => setViewDate(viewDate.subtract(1, 'month'))}
          >
            <IconChevronLeft />
          </span>

          <span className="text-15pxr font-medium text-primary400 tracking-[-0.4px]">
            {viewDate.format('M월')}
          </span>

          <span
            className="cursor-pointer"
            onClick={() => setViewDate(viewDate.add(1, 'month'))}
          >
            <IconChevronRight />
          </span>
        </div>
        <div className="flex justify-between w-128pxr">
          <span
            className="cursor-pointer"
            onClick={() => setViewDate(viewDate.subtract(1, 'year'))}
          >
            <IconChevronLeft />
          </span>

          <span className="text-15pxr font-medium text-primary400 tracking-[-0.4px]">
            {viewDate.format('YYYY년')}
          </span>

          <span
            className="cursor-pointer"
            onClick={() => setViewDate(viewDate.add(1, 'year'))}
          >
            <IconChevronRight />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8pxr my-16pxr">
        <div className="flex justify-between w-full">
          {WEEKS.map((week) => (
            <span key={week} className="text-12pxr w-34pxr text-center">
              {week}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-13pxr w-full">
          {dateList.map((row, i) => (
            <div key={i} className="flex gap-15pxr">
              {row.map((col) => (
                <div
                  key={col.date}
                  className={col.className}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickDate(col);
                  }}
                >
                  <div
                    className={`relative flex items-center justify-center w-full h-full rounded-full text-14pxr ${col.selected && 'bg-primary300 text-white'}`}
                  >
                    {col.obj.date()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-9pxr">
        <Button
          size="small"
          styles="w-full bg-primary300 text-white rounded-[8px]"
          onClick={handleClickButton}
        >
          확인
        </Button>
      </div>
    </div>
  );
}

export default Calendar;
