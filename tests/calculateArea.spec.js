// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area (product of two numbers)", () => {
      expect(calculateArea(5, 4)).toEqual(20);
      expect(calculateArea(7, 3)).toEqual(21);
      expect(calculateArea(0, 10)).toEqual(0);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea()).toBeUndefined();
      expect(calculateArea(5)).toBeUndefined();
      expect(calculateArea(undefined, 3)).toBeUndefined();
      expect(calculateArea(3, undefined)).toBeUndefined();
    });
  });
});
