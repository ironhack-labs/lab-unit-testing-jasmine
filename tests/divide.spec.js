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
      expect(divide(10, 5)).toEqual(2);
      expect(divide(5, 10)).toEqual(0.5);
      expect(divide(200, 25)).toEqual(8);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(5)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 5)).toEqual(undefined);
    });
  });
});
