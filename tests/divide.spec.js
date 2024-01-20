// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 || Divide", () => {
    describe("Function - divide", () => {

        it("Should be defined", () => {
            expect(divide).toBeDefined()
        });

        it("Should take two numbers as arguments", () => {
            expect(divide.length).toBe(2)
        });

        it("should return the division of the two numbers", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(100, 50)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(5, undefined)).toEqual(undefined)
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("5", 10)).toEqual(undefined);
            expect(divide("10", "20")).toEqual(undefined);
        })

    })
})

