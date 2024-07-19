function calculateArea(side1, side2) {
  if (
    typeof side1 !== "number" ||
    typeof side2 !== "number" ||
    !isFinite(side1) ||
    !isFinite(side2)
  ) {
    return undefined;
  }
  return side1 * side2;
}
