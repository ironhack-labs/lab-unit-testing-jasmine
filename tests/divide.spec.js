// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of two numbers", () => {
            expect(divide(2, 1)).toEqual(2);
            expect(divide(4, 4)).toEqual(1);
            expect(divide(5, 2)).toEqual(2.5);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });
        // Refactor
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, "hi")).toEqual(undefined);
            expect(divide("hi", "hello")).toEqual(undefined);
            expect(divide("hi", 1)).toEqual(undefined);
        });
    })
})

