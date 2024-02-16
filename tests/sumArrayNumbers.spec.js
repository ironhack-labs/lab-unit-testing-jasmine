// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should take one argument of type array. The array should contain numbers", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1,3,5,6])).toBe(15);
            expect(sumArrayNumbers([4,2,7,7])).toBe(20);
            expect(sumArrayNumbers([1,3,15,2])).toBe(21);
        });

        it("should return undefined in case the argument passed is not an array", () => {
            expect(sumArrayNumbers("s")).toBe(undefined);
            expect(sumArrayNumbers(4)).toBe(undefined);
            expect(sumArrayNumbers()).toBe(undefined);
        });

        it("should return 0 in case the argument passed is an empty array", () => {
            expect(sumArrayNumbers([])).toBe(0);
        });

    })    
})

