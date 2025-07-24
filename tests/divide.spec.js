describe("Iteration 2", () => {
  describe("Function divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 5)).toEqual(4);
    });

    it("should return undefined if one of the arguments is not provided", () => {
      expect(divide(10)).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });

    it("should return undefined if one of the arguments is not a number", () => {
      expect(divide("10", 2)).toEqual(undefined);
      expect(divide(10, "2")).toEqual(undefined);
    });
  });
});
function divide(a, b) {
  if (
    a === undefined ||
    b === undefined ||
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    return undefined;
  }

  return a / b;
}
