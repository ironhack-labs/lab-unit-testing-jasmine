function calculateArea(length, height) {
  if (typeof length !== "number" || typeof height !== "number") {
    return undefined;
  }
  return length * height;
}