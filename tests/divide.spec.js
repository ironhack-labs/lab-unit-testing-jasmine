// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("the function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("the function should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(100, 2)).toEqual(50);
            expect(divide(24, 3)).toEqual(8);
        });

        it("the function should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(2)).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });

    })    
})

