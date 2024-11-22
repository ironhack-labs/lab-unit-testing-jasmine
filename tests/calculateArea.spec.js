// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe('calculateArea', function() {
    it('should be defined', function() {
      expect(calculateArea).toBeDefined();
    });
  
    it('should take two numbers as arguments', function() {
      expect(calculateArea.length).toBe(2);
    });
  
    it('should return the product of the two numbers (area)', function() {
      expect(calculateArea(5, 3)).toBe(15);
      expect(calculateArea(-5, 3)).toBe(-15);
    });
  
    it('should return undefined if an argument is missing', function() {
      expect(calculateArea(5)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
    });
  
    it('should return undefined if any argument is not a number', function() {
      expect(calculateArea(5, '3')).toBeUndefined();
      expect(calculateArea('5', 3)).toBeUndefined();
    });
  });
  
  