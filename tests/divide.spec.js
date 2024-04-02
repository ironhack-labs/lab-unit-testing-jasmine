// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toBe(2);
      expect(divide(100, 2)).toBe(50);
      expect(divide(3, 2)).toBe(1.5);
      expect(divide(0, 2)).toBe(0);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(4)).toEqual(undefined);
    });
  });
});
