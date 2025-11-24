// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 2)).toEqual(4);
      expect(calculateArea(3, 1)).toEqual(3);
      expect(calculateArea(12, 3)).toEqual(36);
    });
    it("should return undefined if any of the argument is not provided", () => {
      expect(calculateArea(null, 2)).toEqual(undefined);
      expect(calculateArea(2, null)).toEqual(undefined);
      expect(calculateArea(null, null)).toEqual(undefined);
    });
  });
});
