// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the correct division of two numbers", () => {
            expect(divide(6, 3)).toBe(2);
            expect(divide(-6, 3)).toBe(-2);
            expect(divide(5, 2)).toBe(2.5);
        });
        
        it("should return Infinity when dividing by zero", () => {
            expect(divide(5, 0)).toBe(Infinity);
        });

        it("should return -Infinity when a negative number is divided by zero", () => {
            expect(divide(-5, 0)).toBe(-Infinity);
        });
        
        it("should return undefined when any argument is missing", () => {
            expect(divide(5)).toBeUndefined();
            expect(divide()).toBeUndefined();
            expect(divide(undefined, 2)).toBeUndefined();
        });
        
        it("should return NaN when any argument is not a number", () => {
            expect(divide(5, "a")).toBeNaN();
            expect(divide("b", 2)).toBeNaN();
            expect(divide("a", "b")).toBeNaN();
        });
    })    
})
