

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("the function divide should be defined", () => {
            expect(divide).toBeDefined()
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2)
        });
        it("should return the division of the two numbers", () => {
            expect(divide(3, 1)).toEqual(3)
            expect(divide(10, 5)).toEqual(2)
            expect(divide(100, 2)).toEqual(50)
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1234, "1")).toBeUndefined();
            expect(divide("1234", 1)).toBeUndefined();
            expect(divide(null, 1)).toBeUndefined();
            expect(divide(1234, undefined)).toBeUndefined();
        });
    });
});

