function calculateArea(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return undefined;
  }

  return number1 * number2;
}
