// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2,2)).toBe(4);
            expect(calculateArea(4,4)).toBe(16);
            expect(calculateArea(9,3)).toBe(27);
        });

        it("should return undefined, in case any of the arguments are not provided", () => {
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(1)).toBe(undefined);
        });

    })    
})

