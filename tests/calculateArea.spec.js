describe("Iteration 3 || Calculate Area", () => {
    describe("Function - calculateArea", () => {
        it("Function should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("Function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should return the calculated area of the given shape", () => {
            expect(calculateArea(20, 2)).toEqual(40);
            expect(calculateArea(10, 2)).toEqual(20);
            expect(calculateArea(2, 3)).toEqual(6);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(10)).toEqual(undefined);
            expect(calculateArea("3", 4)).toEqual(undefined);
            expect(calculateArea("80", "8")).toEqual(undefined);
        });
    });
});