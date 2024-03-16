// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 1 | Getting Started", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the divide of the two numbers", () => {
        expect(divide(6, 2)).toEqual(3);
        expect(divide(8, 4)).toEqual(2);
        expect(divide(100, 2)).toEqual(50);
      });
  
     it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);

      });
    })
});
/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/