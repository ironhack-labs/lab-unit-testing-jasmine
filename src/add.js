function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
}
it("should return undefined if one or both arguments are not numbers", function () {
  expect(add("5", 2)).toBeUndefined();
  expect(add(5, "2")).toBeUndefined();
  expect(add("5", "2")).toBeUndefined();
  expect(add(5)).toBeUndefined();
  expect(add()).toBeUndefined();
});
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  }
  return a + b;
}