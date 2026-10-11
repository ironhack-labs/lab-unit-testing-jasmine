
function calculateArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    return;
  }

  return length * width;
}
