// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3 | Calculate Area", () => {
  describe("Function calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:

    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
      expect(typeof calculateArea(4, 2)).toEqual("number");
      expect(calculateArea(1, "string")).toEqual(undefined);
      expect(calculateArea("1", "4")).toEqual(undefined);
      expect(calculateArea(NaN, 1)).toEqual(undefined);
    });

    it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(9, 3)).toEqual(27);
      expect(calculateArea(100, 10)).toEqual(1000);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(1, undefined)).toEqual(undefined);
    });
  });
});
