// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("the function should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("the function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(5, 8)).toEqual(40);
            expect(calculateArea(10, 10)).toEqual(100);
            expect(calculateArea(9, 6)).toEqual(54);
        });

        it("in case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea(undefined, 5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });

    })    
})

