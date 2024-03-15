// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 2 | Divide", () => {
    describe("Function devide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(divide(6, 2)).toEqual(3);
        expect(divide(21, 3)).toEqual(7);
        expect(divide(100, 50)).toEqual(2);
        expect(divide(0, 50)).toEqual(0);
        expect(divide(50, 0)).toEqual(Infinity);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the arguments is not a number", () => {
        expect(divide("3",3)).toEqual(undefined);
        expect(divide(3,"3")).toEqual(undefined);
        expect(divide("-5", "7")).toEqual(undefined);
      });
    });
  });
  