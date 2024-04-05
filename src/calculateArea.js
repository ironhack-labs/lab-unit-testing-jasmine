// function calculateArea() {

// }

function calculateArea(length, width) {
  if (length === undefined || width === undefined) {
    return undefined;
  }

  if (typeof length !== "number" || typeof width !== "number") {
    return undefined;
  }

  if (length <= 0 || width <= 0) {
    return undefined; // Negative or zero dimensions are invalid
  }

  return length * width;
}
