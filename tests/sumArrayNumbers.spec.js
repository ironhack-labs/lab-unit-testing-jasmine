// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 5", () => {
    describe("Function sumArrayNumbers", () => {
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });
        it("should take one argument of type array. The array should contain numbers", () => {
            expect(sumArrayNumbers.length).toBe(1(2))
        });
        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers(10, 20, 30)).toEqual(60)
        });
        it("should return undefined if the argument passed is not an array", () => {
            expect(sumArrayNumbers).toEqual(undefined)
        });
        it("should return 0 if the argument passed is an empty array", () => {
            expect(sumArrayNumbers).toEqual(0)
        });

    })
})
