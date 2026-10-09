describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(add).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
     it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(4, 5)).toEqual(20);
      expect(calculateArea(10, 3)).toEqual(30);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
    it("should return undefinded if any of the arguments is not a number", () => {
      expect(divide(NaN,1 )).toEqual(undefined);
      expect(divide(1, NaN )).toEqual(undefined);
      expect(divide("1", 2)).toEqual(undefined);
      expect(divide(1, "2" )).toEqual(undefined);
      expect(divide("100", "47" )).toEqual(undefined);
    });
  });
});
