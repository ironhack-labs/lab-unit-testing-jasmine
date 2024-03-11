// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("function should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2)
        });

        it("function should return a number representing the area of a rectangle (the product of the two arguments)", () =>{
            expect(calculateArea(10,5)).toEqual(50)
            expect(calculateArea(3,3)).toEqual(9)
            expect(calculateArea(25,4)).toEqual(100)
        });

        it("function should return undefined if any of the arguments is not provided", () =>{
            expect(calculateArea(10)).toEqual(undefined)
            expect(calculateArea()).toEqual(undefined)
            expect(calculateArea(undefined, 10)).toEqual(undefined)
        })

    })    
})
