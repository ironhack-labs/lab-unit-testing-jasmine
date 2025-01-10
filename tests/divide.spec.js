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

    it("should return devision", () => {
      expect(divide(1, 2)).toEqual(0.5);
    });

    it("should return undefined if any of argumnets is not provided", () => {
      expect(divide(2)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });

    it("should return undefined if any of numbers are not a number", () => {
      expect(divide(1, "2")).toEqual(undefined);
      expect(divide("1", 2)).toEqual(undefined);
    });
  });
});
