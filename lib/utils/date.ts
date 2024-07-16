import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const formatViewDate = (date: string) => {
  return dayjs(date).format('YYYY.MM.DD');
};

export const formatViewPeriod = (startDate: string, endDate?: string) => {
  if (!endDate || startDate === endDate) {
    return formatViewDate(startDate);
  }

  return `${formatViewDate(startDate)} - ${formatViewDate(endDate)}`;
};

export const getBetweenDateList = (startDate: string, endDate: string) => {
  const diff = dayjs(endDate).diff(startDate) / DAY + 1;

  return new Array(diff)
    .fill(dayjs(startDate))
    .map((date: Dayjs, i) => date.add(i, 'day'));
};
