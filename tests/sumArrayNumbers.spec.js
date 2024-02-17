// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
    it("should define a function", () => {
            expect(sumArrayNumbers).toBeDefined()
        });


        it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1)
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1,2,3])).toEqual(6)
            expect(sumArrayNumbers([2,4,6])).toEqual(12)
            expect(sumArrayNumbers([3,6,9])).toEqual(18)
            expect(sumArrayNumbers([30,2,14])).toEqual(46)
        });

        it("should return undefined if argument is not an array", () => {
            expect(sumArrayNumbers(1)).toEqual(undefined)
            expect(sumArrayNumbers("string")).toEqual(undefined)
            expect(sumArrayNumbers({ })).toEqual(undefined)
        });


        it("should return 0 if array is empty", () => {
            expect(sumArrayNumbers([ ])).toEqual(0)
        });
