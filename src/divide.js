function divide(numerator, denominator) {
  if (typeof numerator === "number" && typeof denominator === "number") {
    return numerator / denominator;
  } else {
    return undefined;
  }
}
