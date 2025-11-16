//UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two argumenst", () => {
            expect(divide.length).toBe(2);
        });

        it("should return undefined if any if the arguments is not provided", () => {
            expect(divide(4)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });
    });
});

