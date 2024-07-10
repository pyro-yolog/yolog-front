import dayjs from 'dayjs';

export const formatViewDate = (date: string) => {
  return dayjs(date).format('YYYY.MM.DD');
};
