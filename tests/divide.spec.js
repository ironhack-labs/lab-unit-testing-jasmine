// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of the two numbers ", () => {
      expect(divide(9, 3)).toEqual(3);
      expect(divide(12, 3)).toEqual(4);
      expect(divide(126, 2)).toEqual(63);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(1, "1")).toBe(undefined);
      expect(divide("1", 1)).toBe(undefined);
      expect(divide(true, 1)).toBe(undefined);
      expect(divide(1, true)).toBe(undefined);
      expect(divide([], 1)).toBe(undefined);
      expect(divide(1, [])).toBe(undefined);
      expect(divide({}, 1)).toBe(undefined);
      expect(divide(1, {})).toBe(undefined);
      expect(divide(undefined, 1)).toBe(undefined);
      expect(divide(1, undefined)).toBe(undefined);
    });

    it("should return undefined if any of the arguments is not provided ", () => {
      expect(divide(1)).toBe(undefined);
      expect(divide()).toBe(undefined);
    });
  });
});
