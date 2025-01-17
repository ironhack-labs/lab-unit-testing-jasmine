// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 | Implement Divide Function", () => {
    describe("Function - divide", () => {

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(25, 5)).toEqual(5);
            expect(divide(10, 2)).toEqual(5);
            expect(divide(100, 50)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
    });
});