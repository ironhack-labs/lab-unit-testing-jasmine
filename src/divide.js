function divide (numOne, numTwo) {
  
  // Check if both values are provided
  if (numOne === undefined || numTwo === undefined) {
    return undefined;
  }

  // Check if inputs are numbers
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return undefined;
  }

  return numOne / numTwo;
}
