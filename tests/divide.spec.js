describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it(" should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(20, 5)).toEqual(4);
            expect(divide(18, 2)).toEqual(9);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

    })    
})

