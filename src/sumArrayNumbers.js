const sumArrayNumbers = (arr) => {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum;
};
