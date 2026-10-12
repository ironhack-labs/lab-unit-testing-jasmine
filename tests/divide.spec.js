// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {

        it("The Function Should be defined.", () => {});
        expect(divide).toBeDefined();
    });
    it("The function should take two numbers as arguments.", () => {
        expect(divide(6, 2)).toBe(3)
    });
    it("The function should return the division of the two numbers.", () => {
        expect(divide(40, 20)).toBe(2)
        expect(divide(10, 2)).toBe(5)
        expect(divide(4, 2)).toBe(2)
    });
    it("The function should return undefined if any of the arguments is not provided", () => {
        expect(divide("", "")).toBeUndefined()
        expect(divide({},"")).toBeUndefined()
    ()} 

    )
})

