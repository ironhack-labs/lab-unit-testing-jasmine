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
      expect(calculateArea(5, 2)).toEqual(10);
      expect(calculateArea(10, 4)).toEqual(40);
      expect(calculateArea(100, 47)).toEqual(4700);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
    it("should return undefined if any of the two arguments is not a number", () => {
      expect(calculateArea("1", 2)).toEqual(undefined);
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea("1", "2")).toEqual(undefined);
    });
  });
});
