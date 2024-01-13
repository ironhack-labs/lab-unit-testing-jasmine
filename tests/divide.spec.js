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

    it("should return the division of the two arguments", () => {
      expect(divide(2, 2)).toEqual(1);
      expect(divide(-2, 2)).toEqual(-1);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(1, "text")).toEqual(undefined);
      expect(divide(true, 2)).toEqual(undefined);
      expect(divide(3, [])).toEqual(undefined);
    });

  });
});
