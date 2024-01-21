// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 2", () => {
    describe("Function - divide", () => {
  
      it("should be defined", () => {
        expect(divide).toBeDefined();
      })
  
      it("should take two numbers as arguments", function () {
        expect(divide.length).toBe(2); 
      })
  
      it("should return the division of the two numbers", () => {
         expect( divide(10, 5)).toEqual(2);
         expect( divide(50, 10)).toEqual(5);
         expect( divide(10, 50)).toEqual(0.2);
      })
      
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide()).toEqual(undefined);
        expect(divide(1)).toEqual(undefined);
        expect(divide(undefined, 1));
      })

      it("should return undefined if any of the two arguments is not a number", () => {
        expect( divide(5, "not a number") ).toEqual(undefined);
        expect( divide("not a number", 5) ).toEqual(undefined);
        expect( divide("not a number", "not a number") ).toEqual(undefined);
       });
     
    })
   })