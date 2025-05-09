// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Function calculateArea", () => {

    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
  
    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
  
    it("should return the area of a rectangle", () => {
      expect(calculateArea(2, 3)).toEqual(6);
      expect(calculateArea(5, 10)).toEqual(50);
      expect(calculateArea(100, 60)).toEqual(6000);
    });
  
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(2)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 10)).toEqual(undefined);
    });
  
  });
  