// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should take one arguments", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should return the sum of all the numbers in an array", () => {
            expect(sumArrayNumbers([1, 14, 1])).toEqual(16);
            expect(sumArrayNumbers([2, 4])).toEqual(6);
            expect(sumArrayNumbers([100, 47, 22])).toEqual(169);
        });

        it("should return undefined if the argument is not an array", () => {
            expect(sumArrayNumbers(1)).toEqual(undefined);
            expect(sumArrayNumbers({ name: "john" })).toEqual(undefined);
            expect(sumArrayNumbers("hi")).toEqual(undefined);
        });

        it("should return 0 if any of the arguments is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });
    });
})

