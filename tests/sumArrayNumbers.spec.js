// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
    
        it("The function should be defined.", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("The function should take one argument of type array. The array should contain numbers", () => {
            expect(sumArrayNumbers.length).toEqual(1)
        });

        it("The function should return the sum of all numbers in the array.", () => {
            expect(sumArrayNumbers([1,2,3])).toEqual(6);
            expect(sumArrayNumbers([10,10,10])).toEqual(30);
            expect(sumArrayNumbers([12,10])).toEqual(22);
        });

        it("In case the argument passed is not an array, the function shold return undefined.", () => {
            expect(sumArrayNumbers(1)).toEqual(undefined);
            expect(sumArrayNumbers("1")).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
        });
        
        it("In case the argument passed is an empty array, the function should return 0.",() => {
            expect(sumArrayNumbers([])).toEqual(0);
        })

    })    
})

