function calculateArea(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  }
  return a * b;
}

calculateArea(2, 2);
