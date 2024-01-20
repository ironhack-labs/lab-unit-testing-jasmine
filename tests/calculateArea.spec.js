// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Shoul be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("Should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("Should return the product of the two numbers", () => {
      expect(calculateArea(2, 2)).toEqual(4);
      expect(calculateArea(5, 5)).toEqual(25);
      expect(calculateArea(7, 8)).toEqual(56);
    });

    it("Should return undefined if any of the arguments is not provided", () => {
      expect(divide(4)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });

    it("Should return undefined if any of the arguments is not a number", () => {
      expect(divide(4, "2")).toEqual(undefined);
      expect(divide("20", 4)).toEqual(undefined);
      expect(divide("6", "3")).toEqual(undefined);
    });
  });
});
