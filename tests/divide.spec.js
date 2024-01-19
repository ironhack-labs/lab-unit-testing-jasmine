// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take 2 arguments", () => {
            expect(divide.length).toBe(2);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("takes 2 number parameters, and divides the first by the second", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(6, 3)).toEqual(2);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined if 1 or more arguments are not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(1)).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

    })
})

