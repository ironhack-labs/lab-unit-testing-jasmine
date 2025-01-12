describe("Iteration 2" || "divide function", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });
    it("should return the division of two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
    });
    it("should return undefined if any of the arguments are not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });
  });
});
