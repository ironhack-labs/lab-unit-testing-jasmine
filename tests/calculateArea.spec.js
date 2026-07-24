// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the product of the two numbers", () => {
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(10, 4)).toEqual(40);
      expect(calculateArea(20, 5)).toEqual(100);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea(1, "")).toEqual(undefined);
      expect(calculateArea("", 1)).toEqual(undefined);
      expect(calculateArea("", "")).toEqual(undefined);
    });
  });
});