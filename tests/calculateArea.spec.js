// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return devision", () => {
      expect(calculateArea(1, 2)).toEqual(2);
    });

    it("should return undefined if any of argumnets is not provided", () => {
      expect(calculateArea(2)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 2)).toEqual(undefined);
    });
  });
});
