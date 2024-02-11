// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("Should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number respresenting the area of a rectangle", () => {
      expect(calculateArea(5, 10)).toEqual(50);
      expect(calculateArea(2, 5)).toEqual(10);
      expect(calculateArea(3, 2)).toEqual(6);
    });

    it("should return undefined if two arguments are not provided", () => {
      expect(calculateArea()).toEqual(undefined);
    });

    it("Should return undefined if arguments are not numbers", () => {
      expect(calculateArea("1", 2)).toEqual(undefined);
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea("1", "2")).toEqual(undefined);
    });
  });
});
