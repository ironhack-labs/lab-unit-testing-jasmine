function divide(divident, divisor) {
  if (
    divident === undefined ||
    divisor === undefined ||
    typeof divident !== "number" ||
    typeof divisor !== "number"
  ) {
    return undefined;
  }

  return divident / divisor;
}
