// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3 || Calculate Area ", () => {
    describe("Function - calculateArea", () => {
        it("Function CalculatedArea should be defined", () => {
            expect(calculateArea).toBeDefined();
        })
        it("should take two numbers as argument", () => {
            expect(calculateArea.length).toBe(2);
        })

        it("should return a number representing the area of a rectangle ", () => {
            expect(calculateArea(2, 2)).toBe(4);
            expect(calculateArea(4, 2)).toBe(8);
        })

        it(" in case any of the arguments is not provided, the function should return undefined", () => {

            expect(calculateArea(1)).toBe(undefined);
            expect(calculateArea()).toBe(undefined);
        })
    })
})

