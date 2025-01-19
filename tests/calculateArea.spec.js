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
        it("should return the division of the two numbers", () => {
            expect(calculateArea(2, 1)).toEqual(2);
            expect(calculateArea(-3, 4)).toEqual(-12);
            expect(calculateArea(100, -80)).toEqual(-8000);
            expect(calculateArea(1000, 0)).toEqual(0);
            expect(calculateArea(0, 0)).toEqual(0);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not number", () => {
            expect(calculateArea(1, "2")).toEqual(undefined);
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea("1", "2")).toEqual(undefined);
        });

    })
})