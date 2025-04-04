function divide(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  }
  const result = num1 > num2 ? num1 / num2 : num2 / num1;
  return Math.round(result * 100) / 100;
}
