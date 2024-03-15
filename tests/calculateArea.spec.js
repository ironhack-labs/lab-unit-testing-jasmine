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

    it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(3, 4)).toEqual(12);
      expect(calculateArea(20, 5)).toEqual(100);
    });

    it("In case any of the arguments is not provided, the function should return undefined.", () => {
      expect(calculateArea(1, "64")).toEqual(undefined);
      expect(calculateArea("13", "45")).toEqual(undefined);
      expect(calculateArea("64", "24")).toEqual(undefined);
    });
  });
});
