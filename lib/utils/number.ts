export const getRangeOfNumber = (
  min: number,
  max: number,
  value: number | string,
) => {
  return Math.min(max, Math.max(min, Number(value)));
};
