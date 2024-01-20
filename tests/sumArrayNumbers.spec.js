

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });
        it("should have one argument of type array ",()=>{
            expect(sumArrayNumbers.length).toBe(1);
        })
        it("should return the sum of all numbers",()=>{
            expect(sumArrayNumbers([1,2,3])).toEqual(6);
        })
        it("should return 0, if an empty array was passed",()=>{
            expect(sumArrayNumbers([])).toEqual(0);
        })
        it("should return undefined, if the argument passed is not an array",()=>{
            expect(sumArrayNumbers("string")).toEqual("undefined");
        })
        it("should return undefined, if array does not contain numbers",()=>{
            expect(sumArrayNumbers(["cat","dog","mouse"])).toEqual("undefined");
        })

    })    
})

