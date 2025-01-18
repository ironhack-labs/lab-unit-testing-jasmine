// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("The function should be defined.", () => {
      expect(calculateArea).toBeDefined();
    });
    it("The function should take two numbers as arguments.", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("The function should return a number representing the area of a rectangle.", () => {
      expect(calculateArea(4, 2)).toEqual(8);
      expect(calculateArea(5, 4)).toEqual(20);
      expect(calculateArea(100, 4)).toEqual(400);
    });

    it("In case any of the arguments is not provided, the function should return undefined", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
