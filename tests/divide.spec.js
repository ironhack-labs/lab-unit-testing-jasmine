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
    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(15, 3)).toEqual(5);
      expect(divide(144, 12)).toEqual(12);
    });
    it("should return undefined if any of the two arguments is not provided", () => {
      expect(divide(4)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 5)).toEqual(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(divide(4, "")).toEqual(undefined);
      expect(divide("7", 7)).toEqual(undefined);
      expect(divide(8, true)).toEqual(undefined);
      expect(divide({}, 12)).toEqual(undefined);
      expect(divide(null, 8)).toEqual(undefined);
      expect(divide(10, [])).toEqual(undefined);
    });
  });
});
