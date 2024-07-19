

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("Should be defined", () => {
            expect(divide).toBeDefined;
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("Should return the division of the two numbers", () => {
            expect(divide(12, 6)).toBe(2);
            expect(divide(1000, 50)).toBe(20);
            expect(divide(3, 2)).toBe(1.5);
        });

        it("Should return undefined if any of the arguments is not provided", () => {
            expect(divide(12)).toBe(undefined);
            expect(divide()).toBe(undefined);
            expect(divide(undefined, 2)).toBe(undefined);
        });

    })    
})


