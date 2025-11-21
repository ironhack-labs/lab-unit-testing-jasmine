// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
      it("The function should be defined.", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
        expect(calculateArea(2, 3)).toEqual(6);;
        expect(calculateArea(3, 9)).toEqual(27);;
        expect(calculateArea(5, 3)).toEqual(15);;
      });

      it('In case any of the arguments is not provided, should return undefined',() => {
        expect(calculateArea(3)).toEqual(undefined);
        expect(calculateArea(undefined, 3)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
      });

//refactor - add test
      it("The function should return undefined if any of the arguments is NaN", () => {
        expect(divide({},2)).toEqual(undefined);
        expect(divide(4,{})).toEqual(undefined);
        expect(divide({},{})).toEqual(undefined);
      });
    });
  });