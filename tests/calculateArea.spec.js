describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return the product of the two arguments", () => {
      expect(calculateArea(3, 3)).toEqual(9);
      expect(calculateArea(7, 2)).toEqual(14);
      expect(calculateArea(3, 0)).toEqual(0);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(3)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
    });
  });
});
