// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("The function should return the division of the two numbers", () => {
            expect(divide(10, 5)).toEqual(2);
        });

        it("The function should return `undefined` if any of the arguments is not provided", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide(undefined, 5)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });
        
        it("Should return undefined if any of the arguments is not a number", () => {
            expect(divide("10", 5)).toEqual(undefined);
            expect(divide(10, "5")).toEqual(undefined);
            expect(divide("10", "5")).toEqual(undefined);
        })
    })
})