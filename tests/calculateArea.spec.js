// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("This function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        
        it("This function should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("This function should return a number representing the area of a rectangle (the product of the two arguments", () => {
            expect(calculateArea(5, 3)).toEqual(15);
            expect(calculateArea(60, 7)).toEqual(420);
            expect(calculateArea(31, 100)).toEqual(3100);
        });
        
        it("This function should return undefined if any of two arguments is not provided", () => {
            expect(calculateArea()).toBeUndefined();
            expect(calculateArea(57)).toBeUndefined();
            expect(calculateArea(undefined, 2)).toBeUndefined();
            expect(calculateArea(9, undefined)).toBeUndefined();
        });

        it("This function should return 0 if any of two arguments is 0", () => {
            expect(calculateArea(0, 30)).toEqual(0);
            expect(calculateArea(128, 0)).toEqual(0);
        });

        it("This function should return NaN if any of two arguments is not a number", () => {
            expect(calculateArea("15", 5)).toEqual(NaN);
            expect(calculateArea("15", "hello there")).toEqual(NaN);
            expect(calculateArea(" ", 117)).toEqual(NaN);
        });

    });
});