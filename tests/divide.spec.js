describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("Should be defined", () => {
      expect(add).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });
    it("should return the division of the two numbers", () => {
      expect(add(5, 5)).toEqual(1);
      expect(add(10, 2)).toEqual(5);
      expect(add(100, 10)).toEqual(10);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(add(1)).toEqual(undefined);
      expect(add()).toEqual(undefined);
      expect(add(undefined, 1)).toEqual(undefined);
    });
  });
});
