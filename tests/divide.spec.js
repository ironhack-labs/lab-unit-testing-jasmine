// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {


        it("should be defined", () => {
            expect(divide).toBeDefined()
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBeDefined(2)

        });
        it("should return the division of the two numbers", () => {
            expect(divide(10, 5)).toEqual(2);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(8, 2)).toEqual(4);
        })
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        })
        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide("1", 2)).toEqual(undefined);
            expect(divide(3, "4")).toEqual(undefined);
            expect(divide("5", "6")).toEqual(undefined);
        })
    })
})

