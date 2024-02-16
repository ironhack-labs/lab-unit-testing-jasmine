// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should return the area of a rectangle", () => {
      expect(calculateArea(4, 5)).toBe(20);
      expect(calculateArea(10, 2)).toBe(20);
      expect(calculateArea(3, 7)).toBe(21);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(calculateArea(4)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
    });

    it("should return undefined if any argument is not a number", () => {
      expect(calculateArea("", 2)).toBeUndefined();
      expect(calculateArea(2, false)).toBeUndefined();
      expect(calculateArea("", false)).toBeUndefined();
    });
  });
});
