// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(2,2)).toBe(4)
            expect(calculateArea(2,8)).toBe(16)
            expect(calculateArea(10,20)).toBe(200)
        });
        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea()).toBeUndefined();
            expect(calculateArea()).toBeUndefined();
            expect(calculateArea(undefined, 2)).toBeUndefined();
        });

    })    
})

