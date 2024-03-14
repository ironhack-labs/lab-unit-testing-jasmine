function calculateArea(numOne, numTwo) {
  if (
    numOne == undefined ||
    typeof numOne != "number" ||
    numTwo == undefined ||
    typeof numTwo != "number"
  ) {
    return undefined;
  }
  return numOne * numTwo;
}
