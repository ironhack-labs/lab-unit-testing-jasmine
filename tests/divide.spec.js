// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("Should take two parameters as argument", () => {
            expect(divide.length).toBe(2);
        });
        it("Should return undefined if any of two arguments is not provided", () => {
            expect(divide()).toBe(undefined);
            expect(divide(4)).toBe(undefined);
            expect(divide(2, undefined)).toBe(undefined);
        });
        it("Should return the division of two numbers", () => {
            expect(divide(6, 12)).toBe(0.5);
            expect(divide(100, 10)).toBe(10);
            expect(divide(27, 3)).toBe(9);
        });
        it("should return undefined if any of one arguments is not a number", () => {
            expect(divide("Hello", 4)).toBe(undefined);
            expect(divide([2, 4], null)).toBe(undefined);
            expect(divide({ name: "Tom" }, undefined)).toBe(undefined);
        })
    })
})

