// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("calculateArea should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("calculateArea should have two arguments", ()=>{
            expect(calculateArea.length).toEqual(2)
        });
        it("calculateArea should return a number representing the area of a rectangle (the product of the two arguments)",()=> {
            expect(calculateArea(5,2)).toEqual(10)
            expect(calculateArea(6,10)).toEqual(60)
            expect(calculateArea(3,3)).toEqual(9)
        })
        it("In case any of the arguments is not provided, calculateArea should return `undefined`", ()=>{
            expect(calculateArea(5)).toEqual(undefined)
        })
        it("calculateArea should return 'undefined' if any of arguments is not a number", ()=>{
            expect(calculateArea("1",2)).toEqual(undefined)
            expect(calculateArea("2","3")).toEqual(undefined)
        })

    })    
})

