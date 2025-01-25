// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function divide", () => {
        it("Should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("Shoukd take two numbers", () => {
            expect(divide.length).toBe(2);
        });
        it("Should return the division of the two numbers", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(500,250)).toBe(2);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(1, undefined)).toEqual(undefined);
        });
        it("hould return underfined if any of the arguments is not a number", () => {
            expect(divide(2, 'a')).toEqual(undefined);
            expect(divide('a', 2)).toEqual(undefined);
            expect(divide("100", "50")).toEqual(undefined);
        });
    });   
});