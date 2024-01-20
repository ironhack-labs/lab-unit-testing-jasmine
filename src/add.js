function add(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  } else if (isNaN(numOne) || isNaN(numTwo)) {
    return undefined;
  }

  return numOne + numTwo;
}
