// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take two numbers as arguments.", ()=>{
            expect(calculateArea.length).toBe(2)
        });
        it("should return a number representing the area of a rectangle (the product of the two arguments)", ()=>{
            expect(calculateArea(4,8)).toBe(32)
            expect(calculateArea(9.5,2)).toBe(19)
            expect(calculateArea(2.5,4.7)).toBe(11.75)
        });
        it("slould in case any of the arguments is not provided, the function should return undefined", ()=>{
            expect(calculateArea(4)).toBe(undefined)
            expect(calculateArea(4, undefined)).toBe(undefined)
            expect(calculateArea(undefined, undefined)).toBe(undefined)
            expect(calculateArea(null, undefined)).toBe(undefined)
            expect(calculateArea(undefined, 10)).toBe(undefined)
        })

    })    
})

