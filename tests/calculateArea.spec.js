describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number representing the area of a rectangle by multiplying the two arguments)", () => {
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(3, 4)).toEqual(12);
      expect(calculateArea(6, 6)).toEqual(36);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea("1", 2)).toEqual(undefined);
      expect(calculateArea("2", "4")).toEqual(undefined);
    });
  });
});
