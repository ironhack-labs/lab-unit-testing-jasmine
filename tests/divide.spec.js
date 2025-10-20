describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(2, 2)).toEqual(1);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(-2, 8)).toEqual(-0.25);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide(undefined, 4)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide(1, "string")).toBe(undefined);
            expect(divide("string", 1)).toBe(undefined);
            expect(divide("string", "string")).toBe(undefined);
        });
    })    
})