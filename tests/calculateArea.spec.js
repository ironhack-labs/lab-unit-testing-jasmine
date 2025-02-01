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
    it("should return the area of the rectangle", () => {
      expect(calculateArea(2, 8)).toEqual(16);
      expect(calculateArea(20, 5)).toEqual(100);
      expect(calculateArea(2.5, 4)).toEqual(10);
      expect(calculateArea(82, 8)).toEqual(656);
      expect(calculateArea(25, 9)).toEqual(225);
    });
    it("should return undefined if any of the two arguments is not provided", () => {
      expect(calculateArea(10)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 6)).toEqual(undefined);
    });
    it("should return undefined if any of the two arguments is not a number", () => {
      expect(calculateArea(true, 85)).toEqual(undefined);
      expect(calculateArea("17"), 74).toEqual(undefined);
      expect(calculateArea({}, 4)).toEqual(undefined);
      expect(calculateArea(45, null)).toEqual(undefined);
      expect(calculateArea(56, [])).toEqual(undefined);
    });
  });
});
