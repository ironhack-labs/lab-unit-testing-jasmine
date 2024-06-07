// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("The function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the multiplication of the two numbers", () => {
            expect(calculateArea(30, 2)).toEqual(60);
            expect(calculateArea(1, 5)).toEqual(5);
            expect(calculateArea(8, 40)).toEqual(320);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        // Each `it` block represents 1 test. You can use the following as a template:

    })
})
