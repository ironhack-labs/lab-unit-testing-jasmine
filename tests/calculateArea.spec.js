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

        it("should return the area of the rectangle with max 3 decimals after comma", () => {
            expect(calculateArea(10.205, 3.306)).toBeCloseTo(33.738, 3);
            expect(calculateArea(12.5, 4.0)).toBeCloseTo(50.000, 3);
            expect(calculateArea(5555.0, 27.0)).toBeCloseTo(149985.000, 3);
            expect(calculateArea(0.125, 0.4)).toBeCloseTo(0.050, 3);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

    })    
})

