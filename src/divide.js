function divide(numOne, numTwo) {
  if (arguments.length !== 2 || numOne === undefined || numTwo === undefined) {
    return undefined;
  }

  if (numTwo === 0) {
    return undefined;
  }

  return numOne / numTwo;
}
