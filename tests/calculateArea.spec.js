// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined as a function", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
        });

        it(" should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(2, 4)).toEqual(8);
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(2, 3)).toEqual(6);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(4)).toBeUndefined();
            expect(calculateArea()).toBeUndefined();
            expect(calculateArea(undefined, 4)).toBeUndefined();
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("NaN", NaN)).toBeUndefined();

        });

    })    
})

