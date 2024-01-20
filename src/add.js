function add(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }

  return typeof (numOne + numTwo) === 'number' ? numOne + numTwo : undefined;
}
