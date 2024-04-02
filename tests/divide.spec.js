describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("function should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 7)).toEqual(undefined);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 5)).toEqual(2);
      expect(divide(20, 2)).toEqual(10);
      expect(divide(100, 1)).toEqual(100);
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
  });
});
