function calculateArea(a, b) {
  if (
    a == undefined ||
    b == undefined ||
    typeof a != "number" ||
    typeof b != "number"
  ) {
    return undefined;
  }
  return a * b;
}
