function divide(num1, num2) {
  if (!num1 || typeof num1 !== "number" || !num2 || typeof num2 !== "number") {
    return undefined;
  }
  return num1 / num2;
}
