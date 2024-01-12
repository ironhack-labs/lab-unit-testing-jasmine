function divide(num1, num2) {
  return typeof num1 === "number" && typeof num2 === "number"
    ? num1 / num2
    : undefined;
}
