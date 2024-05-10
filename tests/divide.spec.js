describe("Iteration 2 | Divide", () => {
  describe("Function divide()", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(6, 2)).toEqual(3);
      expect(divide(-3, -4)).toEqual(0.75);
      expect(divide(100, -50)).toEqual(-2);
    });

    it("should return undefined if second argument equals 0", () => {
      expect(divide(0, 0)).toEqual(undefined);
      expect(divide(1, 0)).toEqual(undefined);
      expect(divide(0, 1)).toEqual(0);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(divide(1, "2")).toEqual(undefined);
      expect(divide(1, "four")).toEqual(undefined);
      expect(divide("true", true)).toEqual(undefined);
    });
  });
});
