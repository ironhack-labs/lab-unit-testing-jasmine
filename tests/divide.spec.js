// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Test to check if the function is defined
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        // Test to check if the function returns the division of two numbers
        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(9, 3)).toBe(3);
            expect(divide(15, 5)).toBe(3);
        });

        // Test to ensure the function returns undefined if any argument is not provided
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(10)).toBeUndefined();
            expect(divide()).toBeUndefined();
        });

        // Test to ensure the function returns undefined if any argument is not a number
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide("string", 2)).toBeUndefined();
            expect(divide(10, "string")).toBeUndefined();
            expect(divide(null, 2)).toBeUndefined();
            expect(divide(10, null)).toBeUndefined();
            expect(divide({}, 2)).toBeUndefined();
            expect(divide(10, {})).toBeUndefined();
        });

        // Test to check division by zero
        it("should return Infinity if dividing by zero", () => {
            expect(divide(10, 0)).toBe(Infinity);
        });
    });
});