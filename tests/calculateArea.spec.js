// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take to arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the product of the two numbers", () => {
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(6, 2)).toEqual(12);
      expect(calculateArea(3, 6)).toEqual(18);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea("1", 1)).toEqual(undefined);
      expect(calculateArea(1, "1")).toEqual(undefined);
      expect(calculateArea("1", "1")).toEqual(undefined);
    });
  });
});
