function calculateArea(width, height) {
  if (typeof width !== "number" || typeof height !== "number") {
    return undefined;
  }
  return width * height;
}