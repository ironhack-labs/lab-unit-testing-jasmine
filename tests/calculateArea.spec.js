describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("The function should be defined.", () => {
      expect(calculateArea).toBeDefined();
    });

    it("The function should take two numbers as arguments.", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
      expect(calculateArea(2, 3)).toBe(6);
      expect(calculateArea(5, 5)).toBe(25);
    });

    it("In case any of the arguments is not provided, the function should return undefined.", () => {
      expect(calculateArea(1)).toBe(undefined);
      expect(calculateArea(undefined, 1)).toBe(undefined);
      expect(calculateArea()).toBe(undefined);
    });

    it("The function should return undefined if any of the two arguments is not a number.", () => {
      expect(calculateArea(1, "1")).toBe(undefined);
      expect(calculateArea("1", "1")).toBe(undefined);
      expect(calculateArea("1", 1)).toBe(undefined);
    });
  });
});
