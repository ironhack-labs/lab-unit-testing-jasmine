describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the product of the two arguments", () => {
      expect(calculateArea(12, 4)).toEqual(48);
      expect(calculateArea(8, 0)).toEqual(0);
      expect(calculateArea(4.5, 2)).toEqual(9);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea("4", 9)).toEqual(undefined);
      expect(calculateArea(7, "13")).toEqual(undefined);
      expect(calculateArea("Hello", "World")).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(9)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 13)).toEqual(undefined);
    });
  });
});
