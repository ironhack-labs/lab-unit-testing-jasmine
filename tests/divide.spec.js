// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Function divide", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it(" should return the division of the two numbers.", () => {
        expect(divide(3, 4)).toEqual(0.75);
        expect(divide(6, 2)).toEqual(3);
        expect(divide(100, 20)).toEqual(5);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

        it("should return undefined if any of the two arguments is not a number.", () => {
        expect(divide("m",3)).toEqual(undefined);
        expect(divide(6,"f")).toEqual(undefined);
        expect(divide("6","3")).toEqual(undefined);
     })
    });
  });
  