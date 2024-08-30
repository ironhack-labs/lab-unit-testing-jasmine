
// Here are the requirements for the `calculateArea` function:
// - The function should be defined.
// - The function should take two numbers as arguments.
// - The function should return a number representing the area of a rectangle (the product of the two arguments).
// - In case any of the arguments is not provided, the function should return `undefined`.
describe("Iteration 3 |  Calculate Area", () => {
    describe("Function calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
      it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
        expect(calculateArea(4, 2)).toEqual(8);
        expect(calculateArea(10, 2)).toEqual(20);
        expect(calculateArea(100, 20)).toEqual(2000);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(2)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
      it("should return undefined if any of the two arguments is not a number", () => {
        expect(calculateArea('2',2)).toBe(undefined)
        expect(calculateArea(2,'2')).toBe(undefined)
      })
    });
  });