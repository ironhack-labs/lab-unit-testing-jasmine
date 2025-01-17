// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers.", () => {
      expect(divide(6, 3)).toEqual(2);
      expect(divide(20, 5)).toEqual(4);
      expect(divide(27, 9)).toEqual(3);
    });

    it("should return the division of the two numbers.", () => {
      expect(divide()).toEqual(undefined);
      expect(divide(1, undefined)).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it("Should return undefined if any of the two arguments is not a number", () => {
      expect(divide("string", "string")).toEqual(undefined);
      expect(divide(null, 1)).toEqual(undefined);
      expect(divide(1, false)).toEqual(undefined);
    });
  });
});
