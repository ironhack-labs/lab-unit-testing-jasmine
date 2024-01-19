// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(add).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(add.length).toBe(2);
        });

        it("should return the a number representing the area of a rectangle", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(100, 47)).toEqual(4700);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undifined if any of the two arguments is not a number", () => {
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea(3, "4")).toEqual(undefined);
            expect(calculateArea("100", "47")).toEqual(undefined);
        })
    });
});



