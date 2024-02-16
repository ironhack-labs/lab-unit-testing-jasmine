// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 ", () => {
  describe("Function divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(2, 1)).toEqual(2);
      expect(divide(8, 4)).toEqual(2);
      expect(divide(80, 8)).toEqual(10);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it(" should return undefined if any of the two arguments is not a number", () => {
      expect(divide(1, "2")).toBeUndefined();
      expect(divide("2", 1)).toBeUndefined();
      expect(divide(true, 1)).toBeUndefined();
      expect(divide(1, null)).toBeUndefined();
      expect(divide(undefined, 11)).toBeUndefined();
      expect(divide([], 1)).toBeUndefined();
      expect(divide({}, 2)).toBeUndefined();
    });
  });
});
