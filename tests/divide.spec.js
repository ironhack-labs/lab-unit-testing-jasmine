// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("The function should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(divide(10, 2)).toBe(5);
    });
    it("The function should return the division of the two numbers", () => {
      expect(divide(20, 10)).toBe(2);
      expect(divide(25, 5)).toBe(5);
    });
    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(divide("", "")).toBeUndefined();
    });
  });
});
