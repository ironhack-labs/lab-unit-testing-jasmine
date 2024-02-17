//UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2)
        })

        it("should return the arguments of two numbers by multiply", () => {
            expect(calculateArea(3, 4)).toEqual(12)
            expect(calculateArea(5, 6)).toEqual(30)
        })

        it("should return undefined if either argument is not provided", () => {
            expect(calculateArea(5)).toEqual(undefined)
            expect(calculateArea(undefined, 6)).toEqual(undefined)
            expect(calculateArea()).toEqual(undefined)
        })

    })
})