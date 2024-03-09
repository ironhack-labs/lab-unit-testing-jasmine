// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });
        it("should take one argument of type array and the array should contain numbers", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });
        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([3, 2])).toEqual(5);
            expect(sumArrayNumbers([5, 5])).toEqual(10);
            expect(sumArrayNumbers([10, 10])).toEqual(20);
        });
        it("if the argument is not an array, the function should return undefined", () => {
            expect(sumArrayNumbers(1)).toEqual(undefined);
            expect(sumArrayNumbers("4")).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
        });
        it("If the argument passed is an empty array, the function should return 0", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });
    })    
})

