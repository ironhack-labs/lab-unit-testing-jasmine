function divide(numOne, numTwo) {
  console.log(numOne, numTwo);
  console.log(!numOne, !numTwo);
  if (
    numOne == undefined ||
    numTwo == undefined ||
    typeof numOne !== "number" ||
    typeof numTwo !== "number"
  ) {
    return undefined;
  }
  if (numTwo === 0) return null;

  return numOne / numTwo;
}
