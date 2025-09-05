function calculateArea(length, width) {
  if (
    length == undefined ||
    width == undefined ||
    typeof length !== "number" ||
    typeof width !== "number"
  )
    return undefined;

  return length * width;
}
