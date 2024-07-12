describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("The function should take two numbers as arguments", () => {
      expect(calculateArea.length).toEqual(2);
    });

    it("The function should return the area of a rectangle", () => {
      expect(calculateArea(2, 4)).toEqual(8);
      expect(calculateArea(3, 3)).toEqual(9);
      expect(calculateArea(4, 5)).toEqual(20);
    });

    it("The function should be defined", () => {
      expect(calculateArea(1)).toBe(undefined);
      expect(calculateArea(undefined, 3)).toBe(undefined);
    });
  });
});
