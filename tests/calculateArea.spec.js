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
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(24, -6)).toEqual(-144);
            expect(calculateArea(0, 25)).toEqual(0);
        });
        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea(1,'2')).toEqual(undefined);
            expect(calculateArea(3,[1])).toEqual(undefined);
            expect(calculateArea('4', 1)).toEqual(undefined);
        });

    })    
})

