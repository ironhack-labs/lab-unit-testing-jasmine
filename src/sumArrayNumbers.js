function sumArrayNumbers(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, curr) => acc + curr, 0);
}
