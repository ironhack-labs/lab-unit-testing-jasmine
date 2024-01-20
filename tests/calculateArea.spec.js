

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take 2 numbers as arguments",()=>{
            expect(calculateArea.length).toEqual(2);
        })
        it("should return a number represeting the area",()=>{
            expect(calculateArea(2,3)).toEqual(6);
        })
        it("should return undefined, if any of the argumets is not present",()=>{
            expect(calculateArea()).toBeUndefined();
        })

    })    
})

