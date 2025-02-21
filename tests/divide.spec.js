// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(0,5)).toEqual(0);
            expect(divide(8,2)).toEqual(4);
            expect(divide(10,5)).toEqual(2);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(3)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 7)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("3", 6)).toEqual(undefined);
            expect(divide([6], 2)).toEqual(undefined);
            expect(divide("5", "5")).toEqual(undefined);
        });

    })    
})