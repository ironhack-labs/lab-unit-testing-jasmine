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
    describe("Function divide", () => {
        it("Should be defined", () =>{
            expect(divide).toBeDefined();
        });

        it("Should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it ("Should return the quotient of the first number divided by the second number", () => {
            expect(divide(10,5)).toEqual(2);
            expect(divide(35,7)).toEqual(5);
            expect(divide(24,6)).toEqual(4);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });

          it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(10, "33")).toEqual(undefined); 
            expect(divide("45", 33)).toEqual(undefined);
            expect(divide("100", "33")).toEqual(undefined); 
        });
        


    });
});