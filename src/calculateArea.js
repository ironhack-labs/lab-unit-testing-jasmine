function calculateArea(l, w) {
  if ((!l || !w)) {
    return undefined;
  }
  if (typeof l !== "number" || typeof w !== "number") {
    return undefined;
  }
  return l * w
}