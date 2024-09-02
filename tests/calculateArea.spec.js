describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of the rectangle", () => {
      expect(calculateArea(6, 2)).toEqual(12);
      expect(calculateArea(28, 4)).toEqual(112);
      expect(calculateArea(100, 20)).toEqual(2000);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toBe(undefined);
      expect(calculateArea()).toBe(undefined);
      expect(calculateArea(undefined, 1)).toBe(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea("5", 10)).toBeUndefined();
      expect(calculateArea(5, "10")).toBeUndefined();
      expect(calculateArea({}, [])).toBeUndefined();
    });
  });
});
