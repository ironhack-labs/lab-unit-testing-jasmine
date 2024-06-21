// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("The function should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("The function should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(12, 3)).toEqual(4);
      expect(divide(1, 1)).toEqual(1);
    });
    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(divide()).toEqual(undefined);
    });
    it("The function should return undefined if the second argument is 0", () => {
      expect(divide(1, 0)).toEqual(undefined);
    });
    it("The function should return undefined if any of the arguments is not a number", () => {
      expect(divide("1", 6)).toEqual(undefined);
      expect(divide(1, "6")).toEqual(undefined);
      expect(divide("10", "5")).toEqual(undefined);
    });
  });
});
