// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toBe(5)
            expect(divide(20, 10)).toBe(2)
        });
        it("should return undefined if no arguments are provided", () => {
            expect(divide(1)).toBe(undefined)
            expect(divide(undefined,1)).toBe(undefined)
        });
    })
})

