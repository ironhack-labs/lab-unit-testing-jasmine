// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it ("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it ("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(20, 2)).toEqual(10);
            expect(divide(50, 5)).toEqual(10);
        });
        it ("should return undefined if any of the arguments is not provided", () => {
            expect(divide(undefined, 8)).toEqual(undefined);
            expect(divide(8)).toEqual(undefined);
            expect(divide(undefined, undefined)).toEqual(undefined);
        })
    })    
})

