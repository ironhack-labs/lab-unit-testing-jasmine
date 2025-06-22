// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("Should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("Should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(4, 2)).toBe(8);
      expect(calculateArea(1, 2)).toBe(2);
      expect(calculateArea(3, 4)).toBe(12);
    });
    it("Should return undefined if any of the two arguments is not provided", () => {
      expect(calculateArea(4)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 2)).toEqual(undefined);
    });
  });
});
