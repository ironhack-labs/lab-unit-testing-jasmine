function calculateArea(side1, side2) {
  if (typeof side1 !== "number" || typeof side2 !== "number") {
    return undefined;
  }
  if (side1 === undefined || side2 === undefined) {
    return undefined;
  }
  return side1 * side2;
}
