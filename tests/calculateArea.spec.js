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
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(10, 5)).toEqual(50);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toBeUndefined();
      expect(calculateArea(undefined, 1)).toBeUndefined();
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea("3", 4)).toEqual(undefined);
      expect(calculateArea("100", "47")).toEqual(undefined);
    });
  });
});
