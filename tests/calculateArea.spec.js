// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea("2")).toEqual(undefined);
      expect(calculateArea("2", "a")).toEqual(undefined);
    });
    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 3)).toBe(6);
      expect(calculateArea(100, 2)).toBe(200);
      expect(calculateArea(100, 0)).toBe(0);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(3)).toEqual(undefined);
    });
  });
});
