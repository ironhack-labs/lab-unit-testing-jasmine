// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should return undefined if the argument is not an array", () => {
            expect(sumArrayNumbers()).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
            expect(sumArrayNumbers("hello")).toEqual(undefined);
        });
        
        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 1, 1])).toEqual(3);
            expect(sumArrayNumbers([4, 5, 6])).toEqual(15)
            expect(sumArrayNumbers([10, 40, 15])).toEqual(65)
        });

        it("should return 0 if the argument is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        });

        // it("the array should contain numbers", () => {
        //     expect(sumArrayNumbers([ "a", "2"])).toEqual(undefined)
        //     expect(sumArrayNumbers([ "1", 2])).toEqual(undefined)
        // });

    })    
})
