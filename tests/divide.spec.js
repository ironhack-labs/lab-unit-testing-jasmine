// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("The function should return the division of the two numbers", () => {
            expect(divide(12,3)).toEqual(4);
            expect(divide(12,-3)).toEqual(-4);
        });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(12)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });


    })    
})