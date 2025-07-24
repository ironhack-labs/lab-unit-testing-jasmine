describe("Iteration 3", () => {
  describe("Function calculateArea()", () => {

    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of the rectangle", () => {
      expect(calculateArea(5, 10)).toEqual(50);
      expect(calculateArea(7, 3)).toEqual(21);
    });

    it("should return undefined if one of the arguments is not provided", () => {
      expect(calculateArea(7)).toEqual(undefined);
      expect(calculateArea(undefined, 4)).toEqual(undefined);
    });

    it("should return undefined if one of the arguments is not a number", () => {
      expect(calculateArea("7", 3)).toEqual(undefined);
      expect(calculateArea(7, "3")).toEqual(undefined);
      expect(calculateArea(true, 3)).toEqual(undefined);
    });

  });
});
