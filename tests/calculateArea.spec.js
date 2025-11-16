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

        it("should return the area of a rectangle (a * b)", () => {
            expect(calculateArea(2, 3)).toEqual(6);
            expect(calculateArea(5, 4)).toEqual(20);
            expect(calculateArea(10, 10)).toEqual(100);
        });

        it("should return undefined if any argument is missing", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea(undefined, 4)).toEqual(undefined);
        });
    });
});



