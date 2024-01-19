// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(calculateArea).toBeDefined();
    });

    it("The function should take two numbers as arguments.", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("The function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(6, 3)).toEqual(18);
      expect(calculateArea(15, 4)).toEqual(60);
      expect(calculateArea(100, 10)).toEqual(1_000);
    });

    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(undefined, 3)).toEqual(undefined);
      expect(calculateArea(28, undefined)).toEqual(undefined);
      expect(calculateArea(undefined, undefined)).toEqual(undefined);
    });
  });
});
