// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("calculateArea", function() {
        it("should be defined", function() {
          expect(calculateArea).toBeDefined();
              });
        });
      
        it("should take two numbers as arguments", function() {
          expect(calculateArea.length).toBe(2); 
        });
      
        it("should return the area of a rectangle (product of the two arguments)", function() {
          expect(calculateArea(5, 4)).toBe(20); 
          expect(calculateArea(3, 7)).toBe(21); 
          expect(calculateArea(10, 10)).toBe(100); 
        });
      
        it("should return undefined if either argument is not provided", function() {
          expect(calculateArea(5)).toBeUndefined(); 
          expect(calculateArea(undefined, 4)).toBeUndefined(); 
          expect(calculateArea()).toBeUndefined(); 
        });
      
        it("should return undefined if either argument is not a number", function() {
          expect(calculateArea(5, "4")).toBeUndefined(); 
          expect(calculateArea("5", 4)).toBeUndefined(); 
          expect(calculateArea("a", "b")).toBeUndefined(); 
        });
      });