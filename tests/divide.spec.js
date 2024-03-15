// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined.", () => {
      expect(divide).toBeDefined();
    });

    it("The function should take two numbers as arguments.", () => {
      expect(divide.length).toBe(2);
    });

    it("The function should return the division of the two numbers.", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 2)).toEqual(10);
      expect(divide(200, 2)).toEqual(100);
    });

    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(divide(10)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });
  });
});
