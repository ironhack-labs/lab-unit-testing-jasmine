// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("function should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("function should return the product of two number", () => {
            expect(calculateArea(2, 3)).toEqual(6);
            expect(calculateArea(4, 60)).toEqual(240);
            expect(calculateArea(5, 100)).toEqual(500);
        });

        it("function should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea()). toEqual(undefined);
            expect(calculateArea(2)). toEqual(undefined);
        })
    })    
})

