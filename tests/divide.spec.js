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
      });
  
      it("should take two numbers as arguments and return their division", () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(9, 3)).toBe(3);
        expect(divide(0, 5)).toBe(0);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(10)).toBeUndefined(); // Missing second argument
        expect(divide()).toBeUndefined();   // Both arguments missing
      });
  
      it("should return undefined if any argument is not a number", () => {
        expect(divide("10", 2)).toBeUndefined(); // First argument is a string
        expect(divide(10, "2")).toBeUndefined(); // Second argument is a string
        expect(divide(null, 2)).toBeUndefined(); // First argument is null
        expect(divide(10, undefined)).toBeUndefined(); // Second argument is undefined
      });
  
      it("should handle division by zero and return Infinity", () => {
        expect(divide(10, 0)).toBe(Infinity);
      });
    });
  });
  