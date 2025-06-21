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
    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 4)).toEqual(8);
      expect(calculateArea(4, 4)).toEqual(16);
      expect(calculateArea(4, 8)).toEqual(32);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea(1, "1")).toBe(undefined);
      expect(calculateArea("1", 1)).toBe(undefined);
      expect(calculateArea(true, 1)).toBe(undefined);
      expect(calculateArea(1, true)).toBe(undefined);
      expect(calculateArea([], 1)).toBe(undefined);
      expect(calculateArea(1, [])).toBe(undefined);
      expect(calculateArea({}, 1)).toBe(undefined);
      expect(calculateArea(1, {})).toBe(undefined);
      expect(calculateArea(undefined, 1)).toBe(undefined);
      expect(calculateArea(1, undefined)).toBe(undefined);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
    });
  });
});
