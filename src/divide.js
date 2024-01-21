function divide(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return undefined;
  }

  return numOne / numTwo;
}

console.log(divide(100, 2))