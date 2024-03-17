// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefineed();

        });

        // Test case: function should return undefined if either length or width is not provided
        it("should return undefined if either length or width is not provided", () => {
            // Assertion: check if calculateArea returns undefined when arguments are missing
            expect(calculateArea()).toBeUndefined();
            expect(calculateArea(5)).toBeUndefined();
            expect(calculateArea(undefined, 5)).toBeUndefined();
        });

        // Test case: function should calculate the area of a rectangle correctly
        it("should calculate the area of a rectangle correctly", () => {
            // Assertion: check if calculateArea calculates the area correctly for valid inputs
            expect(calculateArea(5, 4)).toBe(20);
            expect(calculateArea(10, 7)).toBe(70);

    })    
})

