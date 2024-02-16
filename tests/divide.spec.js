// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        })

        it("should return the division of the two numbers", () => {
            expect(divide(10,2)).toBe(5);
            expect(divide(6,2)).toBe(3);
            expect(divide(70,7)).toBe(10);
        })

        it("should return undefined if any of the arguments are not provided", () => {
            expect(divide()).toBe(undefined);
            expect(divide(1)).toBe(undefined);
        })

    })    
})

