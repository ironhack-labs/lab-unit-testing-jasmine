// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return the Area of two numbers", () => {
      expect(calculateArea(2, 2)).toEqual(4);
      expect(calculateArea(3, 4)).toEqual(12);
      expect(calculateArea(6, 6)).toEqual(36); //should I write than every possible combination?
    });
    it("should return undefined if any of the arguments are not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 2)).toEqual(undefined);
    });
  });
});
