// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined.", () => {
      expect(divide).toBeDefined();
    });
    it("should take two numbers as arguments.", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of the two numbers.", () => {
      expect(divide(9, 3)).toEqual(3);
      expect(divide(20, 5)).toEqual(4);
      expect(divide(1, 1)).toEqual(1);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
    });
  });
});
