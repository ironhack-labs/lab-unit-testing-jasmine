describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("function should take two numbers as arguments.", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("function should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 9)).toEqual(18);
      expect(calculateArea(5, 7)).toEqual(35);
      expect(calculateArea(50, 3)).toEqual(150);
    });

    it("function should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(5)).toEqual(undefined);
      expect(calculateArea(undefined, 9)).toEqual(undefined);
    });
  });
});
