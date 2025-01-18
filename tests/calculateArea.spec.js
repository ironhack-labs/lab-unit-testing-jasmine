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
  
      it("should take two numbers as arguments and return their product as the area", () => {
        expect(calculateArea(5, 10)).toBe(50); // 5 * 10
        expect(calculateArea(7, 3)).toBe(21);  // 7 * 3
        expect(calculateArea(0, 10)).toBe(0);  // 0 * 10
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(5)).toBeUndefined(); // Missing second argument
        expect(calculateArea()).toBeUndefined();  // Both arguments missing
      });
  
      it("should return undefined if any argument is not a number", () => {
        expect(calculateArea("5", 10)).toBeUndefined();   // First argument is a string
        expect(calculateArea(5, "10")).toBeUndefined();   // Second argument is a string
        expect(calculateArea(null, 10)).toBeUndefined();  // First argument is null
        expect(calculateArea(5, undefined)).toBeUndefined(); // Second argument is undefined
      });
    });
  });
  