function divide(number1, number2) {
  if (arguments.length !== 2) {
    return undefined;
  }

  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return undefined;
  }

  if (number2 === 0) {
    return undefined;
  }

  return number1 / number2;
}
