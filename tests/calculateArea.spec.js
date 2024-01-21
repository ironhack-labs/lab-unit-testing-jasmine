// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3 | Calculate the Area", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(add).toBeDefined()
        })
        it("should take two arguments", () => {
            expect(add.length).toBe(2)
        })
        it("Should return the product of two numbers", () => {
            expect(calculateArea(2, 3)).toEqual(6)
            expect(calculateArea(10, 5)).toEqual(50)
            expect(calculateArea(4, 4)).toEqual(16)
        })
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        })
    })
})

