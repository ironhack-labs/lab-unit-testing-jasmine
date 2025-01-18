function calculateArea(length, width) {
  if (arguments.length !== 2 || length === undefined || width === undefined) {
    return undefined;
  }

  return length * width;
}
