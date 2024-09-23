// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("The function should return a number representing the area", () => {
      expect(calculateArea(2, 2)).toEqual(4);
      expect(calculateArea(3, 2)).toEqual(6);
    });

    it("In case any of the arguments is not provided, the function should return undefined", () => {
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea(1, undefined)).toEqual(undefined);
    });
  });
});
