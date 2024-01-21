// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should accept an array as the argument", () => {
            expect(sumArrayNumbers.length).toEqual(1);
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 1, 1])).toEqual(3);
            expect(sumArrayNumbers([10, 11, 12])).toEqual(33);
            expect(sumArrayNumbers([1, 10, 100])).toEqual(111);
        });

        it("should return undefined if the argument is not an array", () => {
            expect(sumArrayNumbers('1')).toEqual(undefined);
            expect(sumArrayNumbers(1)).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
        });

        it("should return 0 if the array is empty", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });
    })    
})
