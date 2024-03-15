describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments.", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(3, 4)).toEqual(12);
      expect(calculateArea(10, 10)).toEqual(100);
      expect(calculateArea(15, 2)).toEqual(30);
    });
    it("should return undefined if any of the arguments is not provided.", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
    });
  });
});
