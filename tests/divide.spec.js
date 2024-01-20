// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined.", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers.", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(128, 4)).toEqual(32);
            expect(divide(256, 16)).toEqual(16);
        });
        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
    })    
})