// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function sould be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("The function should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("Should return the product of the two arguments", () => {
            expect(calculateArea(2, 3)).toBe(6);
            expect(calculateArea(6, 60)).toBe(360);
        })
        it("Should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(4,)).toEqual(undefined);
            expect(calculateArea(undefined, 5)).toEqual(undefined)
        })

    })    
})

