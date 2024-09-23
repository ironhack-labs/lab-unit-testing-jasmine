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
      expect(divide(4, 2)).toEqual(2);
      expect(divide(10, 5)).toEqual(2);
      expect(divide(100, 25)).toEqual(4);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toBeUndefined();
      expect(divide(undefined, 1)).toBeUndefined();
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(1, "2")).toEqual(undefined);
      expect(divide("3", 4)).toEqual(undefined);
      expect(divide("100", "47")).toEqual(undefined);
    });
  });
});
