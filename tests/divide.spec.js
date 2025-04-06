// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        it("should be defined", () => {
            expect(typeof divide).toBe("function");
        });

        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(9, 3)).toBe(3);
        });

        it("should return undefined if the first argument is missing", () => {
            expect(divide(undefined, 2)).toBeUndefined();
        });

        it("should return undefined if the second argument is missing", () => {
            expect(divide(10)).toBeUndefined();
        });

        it("should return undefined if any argument is not a number", () => {
            expect(divide("a", 2)).toBeUndefined();
            expect(divide(2, "b")).toBeUndefined();
            expect(divide("a", "b")).toBeUndefined();
        });

        it("should handle division by zero correctly", () => {
            expect(divide(10, 0)).toBe(Infinity);
            expect(divide(0, 0)).toBeNaN(); // 0 divided by 0 is not a number
        });

        it("should handle negative numbers", () => {
            expect(divide(-10, 2)).toBe(-5);
            expect(divide(10, -2)).toBe(-5);
            expect(divide(-10, -2)).toBe(5);
        });

        it("should handle floating point numbers", () => {
            expect(divide(5.5, 2)).toBeCloseTo(2.75);
        });

    })    
})

