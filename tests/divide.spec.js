// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(divide(typeof number, typeof number)).toBeDefined;
    });

    it("should return the divison of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(6, 3)).toEqual(2);
      expect(divide(9, 3)).toEqual(3);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide()).toEqual(undefined);
      expect(divide(1)).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
      expect(divide(1, undefined)).toEqual(undefined);
    });
  });
});
