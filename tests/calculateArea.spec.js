// UNCOMMENT THE CODE BELOW TO START

//The function should be defined.
//The function should take two numbers as arguments.
//The function should return a number representing the area of a rectangle (the product of the two arguments).
//In case any of the arguments is not provided, the function should return undefined.
//



describe("Iteration 3 | Getting Started", () => {
    describe("Function calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return the product of the two numbers", () => {
        expect(calculateArea(1, 2)).toEqual(2);
        expect(calculateArea(3, 4)).toEqual(12);
        expect(calculateArea(100, 47)).toEqual(4700);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the two arguments is not a number.", () => {
        expect(calculateArea("teststring")).toEqual(undefined);
        expect(calculateArea(true)).toEqual(undefined);
        expect(calculateArea([1,2])).toEqual(undefined);
      });  
    });
  });