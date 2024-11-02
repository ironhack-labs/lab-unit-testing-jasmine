// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(calculateArea).toBeDefined();
      expect(typeof calculateArea).toBe("function");
    });
    it("The function should take two numbers as arguments.", () => {
      expect(calculateArea.length).toEqual(2);
    });
    it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(10, 20)).toEqual(200);
      expect(calculateArea(1, 20)).toEqual(20);
      expect(calculateArea(120, 2)).toEqual(240);
    });
    it("In case any of the arguments is not provided, the function should return undefined.", () => {
      expect(calculateArea(undefined, 2)).toBe(undefined);
      expect(calculateArea(5, undefined)).toBe(undefined);
      expect(calculateArea(undefined, undefined)).toBe(undefined);
      expect(calculateArea()).toBe(undefined);
      expect(divide(10, "10")).toBe(undefined);
      expect(divide(10, "undefined")).toBe(undefined);
    });
  });
});
