// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      spyOn(window, "divide").and.callThrough();
      divide(10, 2);
      expect(divide).toHaveBeenCalledWith(10, 2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(15, 3)).toBe(5);
      expect(divide(8, 4)).toBe(2);
      expect(divide(7, 2)).toBe(3.5);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(10)).toBeUndefined();
      expect(divide()).toBeUndefined();
    });

    it("should handle division by zero", () => {
      expect(divide(10, 0)).toBe(Infinity);
    });
  });
});
