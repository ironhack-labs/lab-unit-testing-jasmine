

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be definde", () => {
            expect(divide).toBeDefined();
        });
        it("should have 2 arguments",()=>{
            expect(divide.length).toEqual(2);
        })
        it("should return the division of 2 numbers",()=>{
            expect(divide(6,3)).toEqual(2);
        })
        it("should return undefined if any of the arguments is not provided",()=>{
            expect(divide()).toBeUndefined();
        })

    })    
})

