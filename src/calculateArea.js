function calculateArea(height, width) {
  if ((!height && height !== 0) || (!width && width !== 0)) return undefined;
  if (typeof height !== "number" || typeof width !== "number") {
    return undefined;
  }
  return height * width;
}
