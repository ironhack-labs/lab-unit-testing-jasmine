describe("Iteration 3 | Area of a Rectangle", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Should be defined", () => {
      expect(calculateArea).toBeDefined;
    });
    it("Should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("Should return undefined if either of the two arguments is not a number", () => {
      expect(calculateArea(1, "mouse")).toBe(undefined);
      expect(calculateArea(true, 2)).toBe(undefined);
      expect(calculateArea(false, [1, 2])).toBe(undefined);
    });
    it("Should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 2)).toBe(4);
      expect(calculateArea(3, 5)).toBe(15);
      expect(calculateArea(10, 7)).toBe(70);
    });
    it("Should return undefined if any of the two arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
