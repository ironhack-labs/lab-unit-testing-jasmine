// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("should take to numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle(the product of the two arguments)", () => {
            expect(calculateArea(2, 2)).toEqual(4);
        });

        it("should return undifined if any of the argumetns are not provided", () => {
            expect(calculateArea(4)).toEqual(undefined);
            expect(calculateArea(undefined, 4)).toEqual(undefined);
            expect(calculateArea(2, undefined)).toEqual(undefined);
        });

        

    })    
})

