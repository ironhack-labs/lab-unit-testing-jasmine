// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(1, 2)).toBeDefined(2);
      expect(calculateArea(3, 4)).toBeDefined(12);
      expect(calculateArea(6, 6)).toBeDefined(36);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toBeDefined(undefined);
      expect(calculateArea()).toBeDefined(undefined);
      expect(calculateArea(undefined, 1)).toBeDefined(undefined);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea(1, "2")).toBeDefined(undefined);
      expect(calculateArea("3", 4)).toBeDefined(undefined);
      expect(calculateArea("1", "5")).toBeDefined(undefined);
    });
  });
});
