function sumArrayNumbers(arrOfNums) {
  if (!Array.isArray(arrOfNums)) return undefined;

  const sum = arrOfNums.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
