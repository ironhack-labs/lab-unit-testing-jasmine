describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(6, 2)).toEqual(3);
      expect(divide(28, 4)).toEqual(7);
      expect(divide(100, 20)).toEqual(5);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toBe(undefined);
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 1)).toBe(undefined);
    });

    it("should return undefined if the second argument is zero", () => {
      expect(divide(1, 0)).toEqual(undefined); // Test division by zero
    });
  });
});