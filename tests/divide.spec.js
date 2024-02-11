// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(2, 4)).toEqual(0.5);
    });

    it("should return undefined if any of the arguments are not provided", () => {
      expect(divide()).toEqual(undefined);
      expect(divide(1)).toEqual(undefined);
      expect(divide(1, undefined)).toEqual(undefined);
    });
  });
});
