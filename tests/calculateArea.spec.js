// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number representing the area of a rectangle(the product of the two arguments", () => {
      expect(calculateArea(5, 5)).toEqual(25);
      expect(calculateArea(10, 10)).toEqual(100);
    });

    it("should return undefined in case any of the arguments is not provided", () => {
        expect(calculateArea(0)).toEqual(undefined);
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    //refactor, i only got this one when Pouria told me about it
    it("should return undefined if any of the two arguments is not a number", () => {
        expect( calculateArea(5, "not a number") ).toEqual(undefined);
        expect( calculateArea("not a number", 5) ).toEqual(undefined);
        expect( calculateArea("not a number", "not a number") ).toEqual(undefined);
       });
  });
});
