function divide(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }
  
  //REFACTOR
  if (typeof numOne != "number" || typeof numTwo != "number") {
    return undefined;
  }
  return numOne / numTwo;
}
