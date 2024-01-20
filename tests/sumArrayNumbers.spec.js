// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("sumArrayNumbers should be defined", () => {
            expect(sumArrayNumbers).toBeDefined()
        });
        it("sumArrayNumbers should contain one argument",()=>{
            expect(sumArrayNumbers.length).toBe(1)
        });
        it("sumArrayNumbers argument should be an array, if not should return undefined", () =>{
            expect(sumArrayNumbers(12)).toEqual(undefined)
        });
        it("sumArrayNumbers should return the sum of all the numbers in the array", ()=>{
            expect(sumArrayNumbers([1,1,1,1])).toEqual(4);
            expect(sumArrayNumbers([2,2,2,2])).toEqual(8);
        });
        it("sumArrayNumbers should return 0 if it receives an empty array",()=>{
            expect(sumArrayNumbers([])).toEqual(0)
        });

    })    
})

