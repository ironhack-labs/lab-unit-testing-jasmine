function add(numOne, numTwo) {
  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    !isFinite(numOne) ||
    !isFinite(numTwo)
  ) {
    return undefined;
  }

  return numOne + numTwo;
}
