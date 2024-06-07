describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(15, 3)).toEqual(5);
            expect(divide(100, 20)).toEqual(5);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });
    });
});