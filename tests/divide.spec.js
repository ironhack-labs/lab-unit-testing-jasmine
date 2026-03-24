// UNCOMMENT THE CODE BELOW TO START





describe("Iteration 2", () => {
  describe("Function - divide", () => {
    
    it("should return 2 for 10 divided by 5", () => {
      expect(divide(10, 5)).toBe(2);
    });

    it("should return 2.5 for 5 divided by 2", () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    it("should return 0 when numerator is 0", () => {
      expect(divide(0, 5)).toBe(0);
    });

    it("should handle division by 1 correctly", () => {
      expect(divide(7, 1)).toBe(7);
    });

    it("should return Infinity when dividing by 0", () => {
      expect(divide(5, 0)).toBe(Infinity);
    });

  });
});
