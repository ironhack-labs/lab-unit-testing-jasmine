function divide(num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !isFinite(num1) ||
    !isFinite(num2)
  ) {
    return undefined;
  }
  return num1 / num2;
}
