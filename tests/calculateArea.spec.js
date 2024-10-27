// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined;
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea(typeof Number, typeof Number)).toBeDefined;
    });

    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(6, 4)).toEqual(24);
      expect(calculateArea(7, 10)).toEqual(70);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea(1, undefined)).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
