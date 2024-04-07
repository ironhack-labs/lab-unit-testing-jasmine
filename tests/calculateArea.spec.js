// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea("13", 2)).toEqual(undefined);
      expect(calculateArea("4", 5)).toEqual(undefined);
      expect(calculateArea(2, "22")).toEqual(undefined);
      expect(calculateArea(5, "37")).toEqual(undefined);
    });
    it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(20, 2)).toEqual(40);
      expect(calculateArea(6, 3)).toEqual(18);
      expect(calculateArea(180, 6)).toEqual(1080);
      expect(calculateArea(1, 2)).toEqual(2);
      expect(calculateArea(3, 4)).toEqual(12);
    });
    // The function should return undefined if any of the arguments is not provided
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(10)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 2)).toEqual(undefined);
      expect(calculateArea(20, undefined)).toEqual(undefined);
    });
  });
});
