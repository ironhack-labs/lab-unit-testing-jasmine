describe("Iteration 2 | Divide function", () => {
  describe("Function divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(10, 2)).toBe(5);
    });

    it("should return undefined if any argument is missing", () => {
      expect(divide(5)).toBeUndefined();
      expect(divide()).toBeUndefined();
    });

    it("should return undefined if any argument is not a number", () => {
      expect(divide("a", 2)).toBeUndefined();
      expect(divide(1, null)).toBeUndefined();
    });
  });
});
