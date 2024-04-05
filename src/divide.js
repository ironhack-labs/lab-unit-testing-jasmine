// function divide () {

// }

function divide(numOne, numTwo) {
  if (numOne === undefined || numTwo === undefined) {
    return undefined;
  } else if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return undefined;
  } else if (numTwo === 0) {
    return undefined; // Division by zero is undefined
  }

  return numOne / numTwo;
}
