describe("Iteration 1 | Getting Started", () => {
    describe("Function calculateArea", () => {
      it("should be calculate", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return the calculate of the two numbers", () => {
        expect(calculateArea(4, 2)).toEqual(8);
        expect(calculateArea(16, 4)).toEqual(64);
        expect(calculateArea(100, 25)).toEqual(2500);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
     });
    });
  });
// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/