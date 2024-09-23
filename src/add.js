function add(numOne, numTwo) {
  if (numOne === undefined || numTwo === undefined) {
    return undefined;
  }
  if (typeof numOne !== "number" || typeof numTwo !== "number")
    throw new Error("Both arguments must be numbers");

  if ((numOne || numTwo) === null) return null;

  return numOne + numTwo;
}
