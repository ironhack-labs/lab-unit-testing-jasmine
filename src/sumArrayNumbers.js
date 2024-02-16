function sumArrayNumbers(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  return array.reduce((sum, num) => sum + num, 0);
}
