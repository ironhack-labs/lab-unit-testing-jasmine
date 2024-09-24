// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(1, 1)).toEqual(1);
            expect(divide(1, 2)).toEqual(0.5);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
            expect(divide(1, "1")).toEqual(undefined);
            expect(divide("2", 2)).toEqual(undefined);
        });
    })
})