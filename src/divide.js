function divide(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numOne !== "number") {
    return undefined;
  }

  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }
  return numOne / numTwo;
}
