describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1,2,3])).toEqual(6);
            expect(sumArrayNumbers([4,5,6])).toEqual(15);
            expect(sumArrayNumbers([4,50,6])).toEqual(60);
        });

        it ("should return undefined if the argument passed is not an array", () => {
            expect(sumArrayNumbers([123])).toEqual(undefined);
            expect(sumArrayNumbers(["1"])).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
        });

        it("should return 0 the argument passed is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(undefined);
        });
    })    
})
