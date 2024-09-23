function divide(numOne, numTwo) {
  if (numTwo === 0) return 0;
  if (typeof numOne !== "number" || typeof numTwo !== "number")
    return undefined;

  return numOne / numTwo;
}
