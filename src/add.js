function add(numOne, numTwo) {
  if (
    numOne === undefined ||
    numTwo === undefined ||
    isNaN(numOne) ||
    isNaN(numTwo)
  ) {
    return undefined;
  }

  return numOne + numTwo;
}
