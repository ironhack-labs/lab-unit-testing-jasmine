// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      spyOn(window, "calculateArea").and.callThrough();
      calculateArea(5, 10);
      expect(calculateArea).toHaveBeenCalledWith(5, 10);
    });

    it("should return the area of a rectangle (product of the two arguments)", () => {
      expect(calculateArea(5, 10)).toBe(50);
      expect(calculateArea(7, 3)).toBe(21);
      expect(calculateArea(2.5, 4)).toBe(10);
      expect(calculateArea(0, 10)).toBe(0);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(5)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
    });
  });
});
