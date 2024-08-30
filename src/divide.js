function divide(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  } else if (numOne == !Number || numTwo == !Number) {
    return undefined;
  }
  return (numOne / numTwo);
}
