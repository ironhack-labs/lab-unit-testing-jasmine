function add(numOne, numTwo) {
  if (
    numOne == undefined ||
    numTwo == undefined ||
    !Number(numOne) ||
    !Number(numTwo)
  ) {
    return undefined;
  }
  return numOne + numTwo;
}
