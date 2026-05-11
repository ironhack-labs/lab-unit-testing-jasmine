describe("Iteration 2", () => {

    describe("Function - divide", () => {

        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
        });

        it("should return undefined if any argument is missing", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });

    });

});