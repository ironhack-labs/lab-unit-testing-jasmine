
describe("Iteration 2 | Divide function", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(add).toBeDefined();
        })
        it("should take two arguments", () => {
            expect(add.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(15, 3)).toEqual(5);
            expect(divide(40, 10)).toEqual(4);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
    });
});
