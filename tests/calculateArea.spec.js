// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of a rectangle", () => {
      expect(calculateArea(9, 3)).toEqual(27);
      expect(calculateArea(20, 4)).toEqual(80);
      expect(calculateArea(100, 10)).toEqual(1000);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea("hello", 5)).toEqual(undefined);
      expect(calculateArea(3, null)).toEqual(undefined);
      expect(calculateArea({}, [])).toEqual(undefined);
    });
  });
});
