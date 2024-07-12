describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("The function should receive 2 arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("The function should return de division of two numbers", () => {
      expect(divide(4, 2)).toBe(2);
      expect(divide(6, 3)).toBe(2);
      expect(divide(25, 5)).toBe(5);
    });

    it("The function should return undefined if any of the two values is not provided", () => {
      expect(divide(2)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 4)).toBe(undefined);
    });
  });
});
