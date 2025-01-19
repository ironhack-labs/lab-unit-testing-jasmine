// UNCOMMENT THE CODE BELOW TO START

describe("Bonus: Iteration 3 | Calculate Area", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined.",() => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return undefined if anshould return a number", () => {
            expect(calculateArea(3,5)).toEqual(15);
        });
        it("should return undefined if arguments are not provided ", () => {
            expect(calculateArea()).toEqual(undefined);
        })

    })
})