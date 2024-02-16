// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3 ", () => {
  describe("Function calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the calculateArea of the two numbers", () => {
      expect(calculateArea(2, 1)).toEqual(2);
      expect(calculateArea(8, 4)).toEqual(32);
      expect(calculateArea(8, 8)).toEqual(64);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it(" should return undefined if any of the two arguments is not a number", () => {
      expect(calculateArea(1, "2")).toBeUndefined();
      expect(calculateArea("2", 1)).toBeUndefined();
      expect(calculateArea(true, 1)).toBeUndefined();
      expect(calculateArea(1, null)).toBeUndefined();
      expect(calculateArea(undefined, 11)).toBeUndefined();
      expect(calculateArea([], 1)).toBeUndefined();
      expect(calculateArea({}, 2)).toBeUndefined();
    });
  });
});
