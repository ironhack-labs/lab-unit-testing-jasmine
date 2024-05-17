describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(5, 2)).toEqual(2.5);
      expect(divide(100, 50)).toEqual(2);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
    it("should return undefined when dividing by zero", () => {
      expect(divide(10, 0)).toEqual(undefined);
    });
  });
});
