function divide(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  return num1 / num2;
}
