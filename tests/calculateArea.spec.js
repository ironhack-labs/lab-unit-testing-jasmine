// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3 | Bonus: Calculate Area", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("the function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(4, 4)).toEqual(16);
            expect(calculateArea(5, 5)).toEqual(25);
            expect(calculateArea(60, 2)).toEqual(120);
            expect(calculateArea(1200, 0)).toEqual(0);
            expect(calculateArea(3, 5)).toEqual(15);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        })

    })    
})

