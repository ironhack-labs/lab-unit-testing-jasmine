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
      expect(calculateArea(5, 10)).toEqual(50);
      expect(calculateArea(3, 4)).toEqual(12);
    });

    it("should return undefined if arguments are missing", () => {
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(5)).toEqual(undefined);
    });
  });
});
