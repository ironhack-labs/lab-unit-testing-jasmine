describe("Iteration 3| Calculate Area", () => {
  describe("Function - calculateArea", () => {
    it("the function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("this function should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("the function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(10, 2)).toEqual(20);
      expect(calculateArea(20, 5)).toEqual(100);
      expect(calculateArea(30, 10)).toEqual(300);
    });

    it("in case any of the arguments is not provided, the function should return undefined.", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
