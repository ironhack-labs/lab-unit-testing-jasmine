describe("Iteration 3", () => {
  describe("Function calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of a rectangle", () => {
      expect(calculateArea(5, 4)).toEqual(20);
      expect(calculateArea(10, 3)).toEqual(30);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(calculateArea(5)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 4)).toEqual(undefined);
    });
  });
});
