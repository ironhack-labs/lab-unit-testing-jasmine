// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });
        it("should take one argument of type array. The array should contain numbers",()=>{
            expect(sumArrayNumbers.length).toBeDefined(1);
            const testArray = ["1","2",3];
            expect(sumArrayNumbers(testArray)).toEqual(undefined);
            expect(sumArrayNumbers(23)).toEqual(undefined);


        });
        it("should return the sum of all numbers in the array",()=>{
            const testArray = [1,2,3];
            expect(sumArrayNumbers(testArray)).toEqual(6);
        });
        it("In case the argument passed is an empty array, the function should return 0",()=>{
            expect(sumArrayNumbers([])).toEqual(0);
        });
        it("In case the argument passed is not an array, the function should return undefined",()=>{
            expect(sumArrayNumbers()).toEqual(undefined);
            expect(sumArrayNumbers(567)).toEqual(undefined);
            expect(sumArrayNumbers("2341234")).toEqual(undefined);
        });

    })    
})






