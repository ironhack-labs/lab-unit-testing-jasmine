// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });
        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(8, 4)).toEqual(32);
            expect(calculateArea(10, 13)).toEqual(130);
        });
        it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(undefined)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });
        it("Should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea('a', 1)).toEqual(undefined);
            expect(calculateArea(true, null)).toEqual(undefined);
        });

    })
})

