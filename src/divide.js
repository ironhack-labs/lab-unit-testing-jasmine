function divide(number, divisor) {
  if (typeof number !== "number" || typeof divisor !== "number") {
    return undefined;
  }
  return number / divisor;
}
