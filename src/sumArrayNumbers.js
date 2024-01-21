function sumArrayNumbers(numbers) {
  let sum = 0;
  if (!Array.isArray(numbers)) {
    return undefined;
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const arr = [1, 3, 5];
