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

    it("should return the area of a rectangle", () => {
      expect(calculateArea(4, 5)).toEqual(20);
      expect(calculateArea(4, 3)).toEqual(12);
      expect(calculateArea(5, 5)).toEqual(25);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(2)).toEqual(undefined);
      expect(calculateArea(1, undefined)).toEqual(undefined);
    });
  });
});
