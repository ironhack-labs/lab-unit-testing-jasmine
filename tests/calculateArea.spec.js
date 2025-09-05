// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3 | Calculate Area", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(3, 4)).toBe(12);
      expect(calculateArea(45, 2)).toBe(90);
      expect(calculateArea(1, 1)).toBe(1);
    });

    it("should return undefined in case any of the arguments is not provided", () => {
      expect(calculateArea(12)).toBe(undefined);
      expect(calculateArea()).toBe(undefined);
      expect(calculateArea(undefined, 456)).toBe(undefined);
    });

    it("should take two numbers", () => {
      expect(calculateArea(12, null)).toBe(undefined);
      expect(calculateArea("", "")).toBe(undefined);
      expect(calculateArea(true, 456)).toBe(undefined);
    });
  });
});
