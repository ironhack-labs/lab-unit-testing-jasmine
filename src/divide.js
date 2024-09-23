function divide(num1, num2) {
  if ((!num1 && num1 !== 0) || (!num2 && num2 !== 0)) return undefined;
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  return num1 / num2;
}
