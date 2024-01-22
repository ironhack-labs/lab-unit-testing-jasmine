// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2)
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(7, 2)).toEqual(14)
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea).toEqual(undefined)
        });

    })
})

