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

    it("should return the division of the two numbers", () => {
      expect(divide(20, 10)).toEqual(2);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(20, undefined)).toEqual(undefined);
      expect(divide(undefined, 10)).toEqual(undefined);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide("", 2)).toEqual(undefined);
      expect(divide(2, false)).toEqual(undefined);
      expect(divide("", false)).toEqual(undefined);
    });
  });
});
