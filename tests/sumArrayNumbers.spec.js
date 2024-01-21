// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5 | Sum Array Numbers", () => {
    describe("Function sumArrayNumbers", () => {
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });
        it("should take one argument of type array and should contain numbers", () => {
            expect(sumArrayNumbers.length).toBe(1);
        })
        it("should sum all numbers in the array", () => {
            expect(sumArrayNumbers([2, 5, 10])).toEqual(17);
            expect(sumArrayNumbers([10, 10, 10])).toEqual(30);
            expect(sumArrayNumbers([15, 15, 15])).toEqual(45);
        })
        it("should return undefined if argument is not an array", () => {
            expect(sumArrayNumbers()).toEqual(undefined);
            expect(sumArrayNumbers("")).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
        })
        it("should return 0 if argument is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
        })
    })    
})

