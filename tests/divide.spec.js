// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {

        // Test if the divide function is defined
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        // Test if it returns the division of two numbers
        it("should return the division of two numbers", () => {
            expect(divide(6, 2)).toBe(3);
            expect(divide(10, 5)).toBe(2);
            expect(divide(9, 3)).toBe(3);
        });

        // Test if it returns undefined if one or both arguments are not provided
        it("should return undefined if one or both arguments are not provided", () => {
            expect(divide(6)).toBeUndefined();
            expect(divide()).toBeUndefined();
        });

        // Test division by zero
        it("should return NaN when dividing by zero", () => {
            expect(divide(6, 0)).toBeNaN();
        });

        // Test if the function handles negative numbers
        it("should handle negative numbers correctly", () => {
            expect(divide(-6, 2)).toBe(-3);
            expect(divide(6, -2)).toBe(-3);
            expect(divide(-6, -2)).toBe(3);
        });

        // Test if non-number arguments return NaN
        it("should return NaN if arguments are not numbers", () => {
            expect(divide("6", 2)).toBeNaN();
            expect(divide(6, "2")).toBeNaN();
            expect(divide("6", "2")).toBeNaN();
        });

    });
});
