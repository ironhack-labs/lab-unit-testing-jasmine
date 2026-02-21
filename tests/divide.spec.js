// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {        
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(1, 1)).toEqual(1);
            expect(divide(4, 2)).toEqual(2);
            expect(divide(100, 10)).toEqual(10);
        });

        it("should return undefined if any of the two arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide("one", 2)).toEqual(undefined);
            expect(divide(1, "two")).toEqual(undefined);
            expect(divide("one", "two")).toEqual(undefined);
        });

        it("should return undefined if the divisor is 0", () => {
            expect(divide(1, 0)).toEqual(undefined);
        })

    })    
})