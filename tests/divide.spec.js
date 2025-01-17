describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        it("Function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the quotient of the two numbers", () => {
            expect(divide(20, 2)).toEqual(10);
            expect(divide(10, 2)).toEqual(5);
            expect(divide(2, 10)).toEqual(0.2);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide("3", 4)).toEqual(undefined);
            expect(divide("80", "8")).toEqual(undefined);
        });
    });
});