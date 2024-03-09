// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", () => {
            expect(divide).toBeDefined();
        });
            
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
    
        it("should return the sum of the two numbers", () => {
            expect(divide(2, 2)).toEqual(1);
            expect(divide(10, 5)).toEqual(2);
            expect(divide(100, 10)).toEqual(10);
        });
    
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
    })    
})

