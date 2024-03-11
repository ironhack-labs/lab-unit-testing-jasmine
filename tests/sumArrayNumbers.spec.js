// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it ("should take one argument of type array", ()=>{
            expect(sumArrayNumbers.length).toBe(1);
        })

        it ("should return the sum of all numbers in the array", ()=>{
            expect(sumArrayNumbers([1,2,3])).toEqual(6);
            expect(sumArrayNumbers([2,10,3])).toEqual(15);
            expect(sumArrayNumbers([100,10,1])).toEqual(111);
        })

        it ("the function should return undefined in case the argument passed is not an array", ()=>{
            expect(sumArrayNumbers(10)).toEqual(undefined);
            expect(sumArrayNumbers("123")).toEqual(undefined);
        })

        it("the function should return 0 in case the argument passed is an empty array",()=>{
            expect(sumArrayNumbers([])).toEqual(0);
        })
    })    
})
