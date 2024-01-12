function calculateArea(numOne, numTwo) {
  return typeof numOne === "number" && typeof numTwo === "number"
    ? numOne * numTwo
    : undefined;
}
