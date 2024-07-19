// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea("test", 23)).toEqual(undefined);
      expect(calculateArea("10", 23)).toEqual(undefined);
      expect(calculateArea(true, 23)).toEqual(undefined);
      expect(calculateArea(null, 23)).toEqual(undefined);
      expect(calculateArea(NaN, 23)).toEqual(undefined);
      expect(calculateArea(Infinity, 23)).toEqual(undefined);
    });
    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 2)).toEqual(4);
      expect(calculateArea(11, 3)).toEqual(33);
      expect(calculateArea(12, 12)).toEqual(144);
      expect(calculateArea(999, 2)).toEqual(1998);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
