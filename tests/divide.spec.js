describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of two numbers", () => {
      expect(divide(6, 2)).toEqual(3);
      expect(divide(100, 50)).toEqual(2);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(6)).toEqual(undefined);
      expect(divide(8)).toEqual(undefined);
    });
  });
});
