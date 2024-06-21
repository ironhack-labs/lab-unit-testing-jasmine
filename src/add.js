function add(numOne, numTwo) {
  if (!numOne || !numTwo) {
    return undefined;
  }
  if (numOne === NaN || numTwo === NaN) {
    return undefined;
  }
  return numOne + numTwo;
}
