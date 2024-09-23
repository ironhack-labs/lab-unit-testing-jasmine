describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("The function should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("Should take two number arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("Should return the division of the two numbers", () => {
      expect(divide(1, 1)).toEqual(1);
      expect(divide(4, 2)).toEqual(2);
      expect(divide(1, 2)).toEqual(0.5);
    });

    it("Should return `undefined` if any of the arguments is not provided", () => {
      expect(divide(1)).toBeUndefined();
      expect(divide()).toBeUndefined();
      expect(divide(undefined, 1)).toBeUndefined();
    });

    it("Should return `undefined` if any of the two arguments is not a number", () => {
      expect(divide(1, "2")).toBeUndefined();
      expect(divide("3", 4)).toBeUndefined();
      expect(divide("100", "47")).toBeUndefined();
    });

    // Test case for division by zero
    it("Should return `0` if the first argument is 0 (division by zero)", () => {
      expect(divide(0, 1)).toEqual(0);
      expect(divide(100, 0)).toEqual(0);
      expect(divide(-5, 0)).toEqual(0);
    });
  });
});
