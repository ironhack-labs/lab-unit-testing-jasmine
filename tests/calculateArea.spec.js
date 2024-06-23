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

    it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(10, 5)).toEqual(50);
      expect(calculateArea(22, 11)).toEqual(242);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(4)).toEqual(undefined);
      expect(calculateArea(undefined, 5)).toEqual(undefined);
      expect(calculateArea(22, undefined)).toEqual(undefined);
    });
  });
});
