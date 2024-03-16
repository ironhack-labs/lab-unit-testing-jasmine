// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be calculateArea", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return the area of a rectangle by multiplying num1 by num2", () => {
        expect(divide(6, 2)).toEqual(3);
        expect(divide(8, 4)).toEqual(2);
        expect(divide(100, 2)).toEqual(50);
    });
  
     it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
      it ("should return undefined if any of the arguments is not a number", () =>{
       expect(calculateArea("1", 2)).toEqual(undefined);
       expect(calculateArea(3, "4")).toEqual(undefined);
       expect(calculateArea("100", "47")).toEqual(undefined);
       
    
    });
 
});

});
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/