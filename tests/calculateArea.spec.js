// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take to numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(5,5)).toEqual(25);
            expect(calculateArea(10,5)).toEqual(50);
            expect(calculateArea(3,5)).toEqual(15);
        });

        it("should return undefined if any argument is provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(5, )).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });

    })    
})

