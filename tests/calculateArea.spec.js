// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculate area", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take 2 arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("takes 2 number parameters, and multiplies the first by the second", () => {
            expect(calculateArea(4, 5)).toEqual(20);
            expect(calculateArea(6, 8)).toEqual(48);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined if 1 or more arguments are not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

    })
})