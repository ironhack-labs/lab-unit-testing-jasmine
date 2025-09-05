// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 | Divide", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(15, 3)).toBe(5);
      expect(divide(0, 4)).toBe(0);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(78)).toBe(undefined);
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 654)).toBe(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(divide("345d", 345)).toEqual(undefined);
      expect(divide(647, null)).toEqual(undefined);
      expect(divide(undefined, null)).toEqual(undefined);
      expect(divide([], {})).toEqual(undefined);
    });

    it("should return null if the second argument is 0", () => {
      expect(divide(89, 0)).toBe(null);
      expect(divide(-35, 0)).toBe(null);
    });
  });
});
