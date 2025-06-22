describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return the division of the two number arguments", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(10, 7)).toEqual(1.42);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, "1")).toEqual(undefined);
            expect(divide("1", 1)).toEqual(undefined);
            expect(divide(true, 1)).toEqual(undefined);
            expect(divide(1, true)).toEqual(undefined);
        });
    });
});