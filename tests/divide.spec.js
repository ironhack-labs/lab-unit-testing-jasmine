// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function divide", () => {
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two numbers as arguments.", () => {
            expect(divide('abc', 5)).toBeUndefined();
        });
        it("The function should return the division of the two numbers.", () => {
            expect(divide(10,2)).toEqual(5);
            expect(divide(20, 10)).toEqual(2);
        }) ;
        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(undefined)).toEqual(undefined);
        });     
    });
})