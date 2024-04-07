function add(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  } else if (typeof numOne != "number" || typeof numTwo != "number") {
    return undefined;
  }

  return numOne + numTwo;
}

//should return undefined if any of the two arguments is not a number
