// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe('divide', function() {
    it('should be defined', function() {
      expect(divide).toBeDefined();
    });
  
    it('should take two numbers as arguments', function() {
      expect(divide.length).toBe(2);
    });
  
    it('should return the division of the two numbers', function() {
      expect(divide(6, 3)).toBe(2);
      expect(divide(-6, 3)).toBe(-2);
    });
  
    it('should return undefined if an argument is missing', function() {
      expect(divide(6)).toBeUndefined();
      expect(divide()).toBeUndefined();
    });
  
    it('should return undefined if any argument is not a number', function() {
      expect(divide(6, '3')).toBeUndefined();
      expect(divide('a', 3)).toBeUndefined();
    });
  });
  