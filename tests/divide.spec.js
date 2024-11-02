// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(typeof divide).toBe("function");
      expect(divide).toBeDefined();
    });
    it("The function should take two numbers as arguments.", () => {
      expect(divide.length).toBe(2);
    });
    it("The function should return the division of the two numbers.", () => {
      expect(divide(10, 5)).toEqual(2);
      expect(divide(5, 5)).toEqual(1);
    });
    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 5)).toBe(undefined);
      expect(divide(10, undefined)).toBe(undefined);
      expect(divide(10, "10")).toBe(undefined);
      expect(divide(10, "undefined")).toBe(undefined);
    });
  });
});
