function calculateArea(length, width) {
if (length === undefined || width === undefined) {
  return undefined;
}
return length*width;
}

console.log(calculateArea(5, 4));