describe("Iteration 2", () => {
    describe("Function - divide", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("Should return the division of the two numbers", () => {
            expect(divide(20, 2)).toEqual(10);
            expect(divide(100, 2)).toEqual(50);
            expect(divide(1000, 10)).toEqual(100);
        });
        it("Should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
        it("Should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("3", 4)).toEqual(undefined);
            expect(divide("100", "47")).toEqual(undefined);
        });
    })
})