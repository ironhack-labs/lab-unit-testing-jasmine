// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("Should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("Should return the division of the two numbers", () => {
            expect(divide(100, 10)).toBe(10);
            expect(divide(5, 2)).toBe(2.5);
            expect(divide(20, 5)).toBe(4);
        });

        it("Should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toBe(undefined);
            expect(divide(5, )).toBe(undefined);
            expect(divide()).toBe(undefined);
        });
        
    })    
})

