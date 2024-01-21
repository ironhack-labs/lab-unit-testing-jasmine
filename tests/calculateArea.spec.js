describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(2, 2)).toEqual(4);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea(1, "str")).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
    });
  });
});
