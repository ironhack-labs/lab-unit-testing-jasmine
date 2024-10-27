function divide(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return undefined;
  }

  if (number1 === undefined || number2 === undefined) {
    return undefined;
  }

  return number1 / number2;
}
