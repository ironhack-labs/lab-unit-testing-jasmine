// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should return undefined if the function is not defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(21, 3)).toEqual(7);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(null, 3)).toEqual(undefined);
      expect(divide(10, null)).toEqual(undefined);
      expect(divide(null, null)).toEqual(undefined);
    });
  });
});
