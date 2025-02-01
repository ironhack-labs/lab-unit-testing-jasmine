// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe("Iteration 3 | CalculateArea", () => {
    describe("Function calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(calculateArea(6, 6)).toEqual(36);
        expect(calculateArea(15, 15)).toEqual(225);
        expect(calculateArea(20, 20)).toEqual(400);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
      it ("should return undefined if any of the arguments is not not a number", () =>{
        expect(calculateArea(1, "2")).toEqual(undefined);
        expect(calculateArea("3", 4)).toEqual(undefined);
        expect(calculateArea("100",  "47")).toEqual(undefined);
      });
    });
  });