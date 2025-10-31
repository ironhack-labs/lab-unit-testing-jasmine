describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {

    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number representing the rectangle area (width * height)", () => {
      expect(calculateArea(2, 3)).toEqual(6);
      expect(calculateArea(10, 5)).toEqual(50);
      expect(calculateArea(0, 7)).toEqual(0);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(calculateArea(2)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 4)).toEqual(undefined);
    });

    it("should return undefined if any argument is not a number", () => {
      expect(calculateArea("2", 3)).toEqual(undefined);
      expect(calculateArea(2, null)).toEqual(undefined);
    });

  });
});
