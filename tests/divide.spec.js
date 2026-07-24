// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 4)).toEqual(5);
    });
    it("should return undefined if any argument is missing", () => {
      expect(divide()).toEqual(undefined);
      expect(divide(10)).toEqual(undefined);
    });
  });
});
