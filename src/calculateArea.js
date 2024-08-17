function calculateArea(length, width) {
  if (arguments.length !== 2) {
    return undefined;
  }

  if (typeof length !== "number" || typeof width !== "number") {
    return undefined;
  }

  return length * width;
}
