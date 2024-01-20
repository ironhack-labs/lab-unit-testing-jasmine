function sumArrayNumbers(numArray) {
  if (!Array.isArray(numArray)) {
    return undefined;
  }
  if (numArray.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}
