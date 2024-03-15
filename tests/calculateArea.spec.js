// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("Should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("Should return number representing the area of rectangle", () => {
            expect(calculateArea(2, 3)).toBe(6);
            expect(calculateArea(18, 5)).toBe(90);
            expect(calculateArea(6.4, 9)).toBe(57.6);
            expect(calculateArea(0.5, 7)).toBe(3.5);
        });
        it("Should return undefined if any of two arguments is not provided", () => {
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(1)).toBe(undefined);
            expect(calculateArea(undefined, 6)).toBe(undefined);
        });
        it("Should return undefined if any of two arguments is not a number", () => {
            expect(calculateArea(null, 1)).toBe(undefined);
            expect(calculateArea("Hello", [3, 5, 8, 8])).toBe(undefined);
            expect(calculateArea({ name: "Gia" }, true)).toBe(undefined);
        })
    })
})
