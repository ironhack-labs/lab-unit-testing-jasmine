// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        if("should return the correct area of two positive numbers", () => {
            expect(calculateArea(5, 4)).toBe(20);
            expect(calculateArea(7, 3)).toBe(21);
        });

        it("should return 0 if any argument is 0", () => {
            expect(calculateArea(0, 5)).toBe(0);
            expect(calculateArea(7, 0)).toBe(0);
            expect(calculateArea(0, 0)).toBe(0);
        });
        it("should return undefined when any argument is missing or negative", () => {
            expect(calculateArea(5)).toBeUndefined();
            expect(calculateArea()).toBeUndefined();
            expect(calculateArea(undefined, 2)).toBeUndefined();
            expect(calculateArea(-5, 2)).toBeUndefined();
            expect(calculateArea(5, -2)).toBeUndefined();
        });

        it("should return NaN when any argument is not a number", () => {
            expect(calculateArea(5, "a")).toBeNaN();
            expect(calculateArea("b", 2)).toBeNaN();
            expect(calculateArea("a", "b")).toBeNaN();
        });
    })    
})