export const filterNumbers = (array, largerThan) => {
  const result = array.filter((item) => item <= largerThan);
  return result;
};
