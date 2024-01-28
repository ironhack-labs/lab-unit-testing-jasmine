describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it("should take two numbers as arguments", () => {
            expect(divide(5, 43)).toBeDefined();
            expect(divide(0,123)).toBeDefined()
        });

        it("should return the division of the two numbers", () => {
            expect(divide(20,10)).toEqual(2);
            expect(divide(4,4)).toEqual(1);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(1,undefined)).toEqual(undefined);
            expect(divide(12)).toEqual(undefined);
        });

    })    
})

