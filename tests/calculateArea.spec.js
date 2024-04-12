// UNCOMMENT THE CODE BELOW TO START


// The function should be defined.
// The function should take two numbers as arguments.
// The function should return a number representing the area of a rectangle (the product of the two arguments).
// In case any of the arguments is not provided, the function should return undefined.

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
            expect(calculateArea(5,2)).toBe(10);
            expect(calculateArea(10,3)).toBe(30);
            expect(calculateArea(50,2)).toBe(100);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(3)).toBe(undefined);
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(undefined, 5)).toBe(undefined);
        });
    })    
})
