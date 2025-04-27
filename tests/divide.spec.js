// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 | Divide", () => {
  describe("Function divide", () => {
    it("The function should be defined .", () => {
      expect(typeof  divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide()).toEqual(undefined);
    });
  });
});
