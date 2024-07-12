describe("Iteration 2 | Divide", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Should be defined", () => {
      expect(divide).toBeDefined;
    });
    it("Should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("Should return undefined if either of the two arguments is not a number", () => {
      expect(divide(1, "mouse")).toBe(undefined);
      expect(divide(true, 3)).toBe(undefined);
      expect(divide([1, 2], false)).toBe(undefined);
    });
    it("Should return the division of two numbers", () => {
      expect(divide(2, 1)).toBe(2);
      expect(divide(4, 2)).toBe(2);
      expect(divide(1, 2)).toBe(0.5);
      expect(divide(15, 5)).toBe(3);
    });
    it("Should return undefined if any of the aruments is not provided", () => {
      expect(divide(1)).toBe(undefined);
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 1)).toBe(undefined);
    });
  });
});
