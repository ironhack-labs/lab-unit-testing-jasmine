// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Function is defined", () => {
      expect(divide).toBeDefined();
    });
    it("Function should take 2 arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("Function should return division of 2 numbers", () => {
      expect(divide(6, 2)).toBe(3);
    });
    it("Function should return undefined if any of the arguments aren't provided", () => {
      expect(divide(4)).toBe(undefined);
      expect(divide()).toBe(undefined);
    });
  });
});
