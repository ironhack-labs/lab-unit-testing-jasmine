// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take 1 argument which is an array", () => {
            expect(sumArrayNumbers.length).toBe(1);
            expect(sumArrayNumbers(300)).toEqual(undefined);
            expect(sumArrayNumbers("lol")).toEqual(undefined);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
            expect(sumArrayNumbers([5, 10, 15, 20])).toEqual(50);
        });

        

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined if argument is not provided", () => {
            expect(sumArrayNumbers()).toEqual(undefined);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return 0 if the argument passed is an empty array,", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });

    })
})