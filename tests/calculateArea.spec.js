describe("Iteration 3 | Calculate area", () => {
  describe("Function calculateArea()", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a product representing the area of a rectangle", () => {
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(5, 0)).toEqual(0);
    });

    it("should always return a positive number", () => {
      expect(calculateArea(-4, 2)).toEqual(8);
      expect(calculateArea(5, -3)).toEqual(15);
      expect(calculateArea(-4, -2)).toEqual(8);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea(1, "four")).toEqual(undefined);
      expect(calculateArea("true", true)).toEqual(undefined);
    });
  });
});
