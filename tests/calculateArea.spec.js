describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should return the area of a rectangle when given two numbers", () => {
      expect(calculateArea(2, 3)).toBe(6);
    });

    it("should return undefined when given one number", () => {
      expect(calculateArea(2)).toBeUndefined();
    });

    it("should return undefined when given no numbers", () => {
      expect(calculateArea()).toBeUndefined();
    });

    it("should return undefined when given non-number arguments", () => {
      expect(calculateArea("a", 3)).toBeUndefined();
      expect(calculateArea(2, "b")).toBeUndefined();
      expect(calculateArea("a", "b")).toBeUndefined();
    });
  });
});
