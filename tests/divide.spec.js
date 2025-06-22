// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(typeof divide).toBe("number");
        });

        it("should return the division of the two numbers", () => {
            expect(divide(3, 2)).toBe(1.5);
            expect(divide(100, 10)).toBe(10);
            expect(divide(25, 5)).toBe(5);
        });

        it("should The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(undefined, 2)).toBe(undefined);
            expect(divide(100, undefined)).toBe(undefined);
        })

    })    
})

