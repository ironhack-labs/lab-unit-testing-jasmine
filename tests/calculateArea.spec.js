// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("Should be two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2)
        })
        it("Should return a number representing the area of a rectangle", () => {
            expect(calculateArea(1, 2)).toBe(2)
            expect(calculateArea(5, 5)).toBe(25)
            expect(calculateArea(100, 100)).toBe(10.000)
        })
        it("Should be undefined if any of the arguments is provied", () => {
            expect(calculateArea(1)).toEqual(undefined)
            expect(calculateArea()).toEqual(undefined)
            expect(calculateArea(undefined, 1)).toEqual(undefined)
            expect(calculateArea(1, undefined)).toEqual(undefined)
        })

    })
})

