// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return the area of a rectangle", () => {
            expect(calculateArea(2, 1)).toEqual(2);
            expect(calculateArea(4, 4)).toEqual(16);
            expect(calculateArea(5, 2)).toEqual(10);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 2)).toEqual(undefined);
        });
        // Refactor
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1, "hi")).toEqual(undefined);
            expect(calculateArea("1", "2")).toEqual(undefined);
            expect(calculateArea("hi", 1)).toEqual(undefined);
        });

    })
})

