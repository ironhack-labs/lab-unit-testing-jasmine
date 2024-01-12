describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
      expect(typeof divide(1, 1)).toBe('number');
    });

    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(10, 5)).toEqual(2);
      expect(divide(100, 2)).toEqual(50);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});
