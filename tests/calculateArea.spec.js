// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("The function should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("Should take two numbers as arguments", () => {
      expect(calculateArea.length).toEqual(2);
    });
    it("Should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(2, 2)).toEqual(4);
      expect(calculateArea(10, 30)).toEqual(300);
    });
    it("Should return undefined if any of the two arguments is not a number.", () => {
      expect(calculateArea("2", 2)).toEqual(undefined);
      expect(calculateArea(2, "2")).toEqual(undefined);
      expect(calculateArea("2", "2")).toEqual(undefined);
    });
  });
});
