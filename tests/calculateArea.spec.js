// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("The function should return a number representing the area of a rectangle (the product of the two arguments).",() => {
            expect(calculateArea(331,321)).toEqual(331*321);
            expect(calculateArea(1312,123.34)).toEqual(1312*123.34);
        });

        it("In case any of the arguments is not provided, the function should return undefined.",() => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });
    })    
})

