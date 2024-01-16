describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("Should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(5, 6)).toEqual(30);
      expect(calculateArea(10, 5)).toEqual(50);
      expect(calculateArea(150, 50)).toEqual(7500);
    });
    it("should be undefined if any of the arguments isn't provided", () => {
      expect(calculateArea(5)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
      expect(calculateArea("1", "2")).toEqual(undefined);
      expect(calculateArea("0.5", 1)).toEqual(undefined);
      expect(calculateArea(1, "0.5")).toEqual(undefined);
    });
  });
});
