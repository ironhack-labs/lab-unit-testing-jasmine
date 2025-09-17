// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
  describe("Function - divide", () => {
    
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments and return their division", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(9, 3)).toBe(3);
    });

    it("should return undefined if the first argument is missing", () => {
      expect(divide(undefined, 2)).toBeUndefined();
    });

    it("should return undefined if the second argument is missing", () => {
      expect(divide(10)).toBeUndefined();
    });

    it("should return undefined if any argument is not a number", () => {
      expect(divide("a", 2)).toBeUndefined();
      expect(divide(10, "b")).toBeUndefined();
    });

    it("should handle division by zero", () => {
      expect(divide(10, 0)).toBe(Infinity); // JS behavior: number / 0 === Infinity
      expect(divide(0, 0)).toBeNaN(); // 0 / 0 === NaN
    });

  });
});
function divide(a, b) {
  if (a === undefined || b === undefined) {
    return undefined;
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return undefined;
  }

  return a / b;
}