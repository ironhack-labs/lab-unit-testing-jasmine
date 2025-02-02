function calculateArea(num, mult) {
  if (typeof num !== "number" || typeof mult !== "number") {
    return undefined;
  }

  return num * mult;
}
