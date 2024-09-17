// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(calculateArea).toBeDefined();
    });
    it("The function should take two numbers as arguments.", () => {
      expect(calculateArea.length).toEqual(2);
      expect(calculateArea(2, "string")).toThrow;
      expect(calculateArea(2, 2)).not.toThrow;
    });
    it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(3, 6)).toEqual(18);
      expect(calculateArea(2, 2)).toEqual(4);
    });
    it("In case any of the arguments is not provided, the function should return undefined.", () => {
      expect(calculateArea(undefined, 1)).toEqual(undefined);
      expect(calculateArea(1)).toEqual(undefined);
    });
  });
});
