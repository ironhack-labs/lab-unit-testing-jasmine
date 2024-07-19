// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide("test", 23)).toEqual(undefined);
      expect(divide("10", 23)).toEqual(undefined);
      expect(divide(true, 23)).toEqual(undefined);
      expect(divide(null, 23)).toEqual(undefined);
      expect(divide(NaN, 23)).toEqual(undefined);
      expect(divide(Infinity, 23)).toEqual(undefined);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(50, 10)).toEqual(5);
      expect(divide(100, 20)).toEqual(5);
    });
    it("return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});
