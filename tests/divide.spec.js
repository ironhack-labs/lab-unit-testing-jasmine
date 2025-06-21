// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(6, 2)).toEqual(3);
      expect(divide(10, 5)).toEqual(2);
      expect(divide(9, 3)).toEqual(3);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide()).toBeUndefined();
      expect(divide(5)).toBeUndefined();
      expect(divide(undefined, 2)).toBeUndefined();
    });
  });
});
