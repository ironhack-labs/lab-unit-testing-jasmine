describe("Iteration 2 | Divide", () => {
  describe("Function Devide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the divide of the two numbers", () => {
      expect(divide(6, 2)).toEqual(3);
      expect(divide(100, 4)).toEqual(25);
      expect(divide(60, 30)).toEqual(2);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});
