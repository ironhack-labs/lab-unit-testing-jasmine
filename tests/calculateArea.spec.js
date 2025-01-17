// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("function should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(4, 2)).toBe(8);
      expect(calculateArea(27, 5)).toBe(135);
      expect(calculateArea(200, 100)).toBe(20000);
    });

    it("function should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toBe(undefined);
      expect(calculateArea()).toBe(undefined);
      expect(calculateArea(undefined, 4)).toBe(undefined);
    });
    it("should return undefined if any of the arguments are not numbers", () => {
      expect(calculateArea("a", 1)).toEqual(undefined);
      expect(calculateArea("a", "b")).toEqual(undefined);
      expect(calculateArea(1, "b")).toEqual(undefined);
    });
  });
});
