// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 1 | Getting Started", () => {
    describe("Function divide", () => {
        
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(20, 4)).toEqual(5);
            expect(divide(100, 25)).toEqual(4);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(10, "2")).toEqual(undefined);
            expect(divide("20", 4)).toEqual(undefined);
            expect(divide(true, 2)).toEqual(undefined);
            expect(divide(100, null)).toEqual(undefined);
        });

        it("should handle division by zero correctly", () => {
            expect(divide(10, 0)).toEqual(Infinity);
            expect(divide(0, 10)).toEqual(0);
        });

    });
});

