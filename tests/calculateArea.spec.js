// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of the two numbers", () => {
      expect(calculateArea(2, 3)).toEqual(6);
      expect(calculateArea(4, 8)).toEqual(32);
      expect(calculateArea(5, 5)).toEqual(25);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(6)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(2, undefined)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea("2", 5)).toEqual(undefined);
      expect(calculateArea(1, true)).toEqual(undefined);
      expect(calculateArea([], "5")).toEqual(undefined);
    });
  });
});