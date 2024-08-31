// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe("divide", function() {
  
    it("should be defined", function() {
      expect(divide).toBeDefined();
    });
  
    it("should return the division of two numbers", function() {
      expect(divide(6, 2)).toBe(3);
      expect(divide(10, 5)).toBe(2);
    });
  
    it("should return undefined if any of the arguments is not provided", function() {
      expect(divide(6)).toBeUndefined();
      expect(divide()).toBeUndefined();
    });
  
    it("should return Infinity if dividing by 0", function() {
      expect(divide(6, 0)).toBe(Infinity);
    });
  
    it("should return 0 if 0 is divided by any number", function() {
      expect(divide(0, 5)).toBe(0);
    });
  
  });