// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined(); // Fixed typo
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(2, 4)).toEqual(0.5);
      expect(divide(10, 5)).toEqual(2);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});
