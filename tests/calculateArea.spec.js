describe("Bonus: Iteration 3 | Calculate Area", () => {
  describe("Function calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the rectangle area by multiplaying the two numbers", () => {
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(3, 4)).toEqual(12);
      expect(calculateArea(50, 3)).toEqual(150);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
