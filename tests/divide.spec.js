describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined as a function", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(2, 2)).toEqual(1);
      expect(divide(4, 2)).toEqual(2);
      expect(divide(50, 5)).toEqual(10);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(2)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
    });
  });
});
