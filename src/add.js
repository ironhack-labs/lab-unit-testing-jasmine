/**
 * function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
}

 */

// new Code:
function add(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return undefined;
  }

  return numOne + numTwo;
}
