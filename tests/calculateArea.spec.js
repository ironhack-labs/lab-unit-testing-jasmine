// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("Function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("Function should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("Function should return undefined if any of the arguments are not provided", () => {
      expect(calculateArea(3)).toBe(undefined);
      expect(calculateArea()).toBe(undefined);
    });
    it("Function should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 2)).toBe(8);
    });
  });
});
