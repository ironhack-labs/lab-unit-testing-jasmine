// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two numbers as arguments", () => {
        expect(calculateArea.length).toBe(2);
        expect(calculateArea(7,"5")).toEqual(undefined);
        expect(calculateArea("7",5)).toEqual(undefined);
      });
  
      it("should return the division of the two numbers", () => {
        expect( calculateArea(6, 2) ).toEqual(12);
        expect( calculateArea(9, 2) ).toEqual(18);
        expect( calculateArea(100, 4) ).toEqual(400);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });

      
    });
  });