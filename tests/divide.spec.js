// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("function should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("function should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("function should return the division of the two numbers", () => {
      expect(divide(4, 2)).toBe(2);
      expect(divide(27, 5)).toBe(5.4);
      expect(divide(200, 100)).toBe(2);
    });

    it("function should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toBe(undefined);
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 4)).toBe(undefined);
    });

    it("should return undefined if any of the arguments are not numbers", () => {
      expect(divide("a", 1)).toEqual(undefined);
      expect(divide("a", "b")).toEqual(undefined);
      expect(divide(1, "b")).toEqual(undefined);
    });
  });
});
