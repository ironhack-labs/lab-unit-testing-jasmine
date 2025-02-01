// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(15, 5)).toEqual(75);
            expect(calculateArea(100, 4)).toEqual(400);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

    })    
})

// - The function should be defined.
// - The function should take two numbers as arguments.
// - The function should return a number representing the area of a rectangle (the product of the two arguments).
// - In case any of the arguments is not provided, the function should return `undefined`.
