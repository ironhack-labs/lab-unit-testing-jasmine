

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });
        it("should take one argument of type object and have properties firstName and lastName",()=>{
            expect(printFullName.length).toEqual(1);
        })
        it("should return a string with firstName and lastName separated by a space",()=>{
            expect(printFullName({firstName:"Erik",lastName:"Busch"})).toEqual("Erik Busch");
        })
        it("should return undefined if the firstName or lastName is not provided",()=>{
            expect(printFullName({})).toBeUndefined();
        })
        

    })    
})

