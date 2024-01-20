// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(sumArrayNumbers).toBeDefined()
        });
        it("The function should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1)
        });
        it("The function should return a sum of all the numbers in the array", () => {
            expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
            expect(sumArrayNumbers([100, 47])).toEqual(147);
        });
        it("If the argument passed is not an array, the function should return undefined", () => {
            expect(sumArrayNumbers({})).toEqual(undefined);
            expect(sumArrayNumbers(3)).toEqual(undefined);
            expect(sumArrayNumbers('filipe teixeira')).toEqual(undefined);
        });
        it("If the argument passed is an empty array, the function should return 0", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });

    })    
})

