// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(10,5)).toEqual(2);
            expect(divide(30,10)).toEqual(3);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide('1' , 2)).toEqual(undefined);
            expect(divide('34','22')).toEqual(undefined);
        });

    })    
})

