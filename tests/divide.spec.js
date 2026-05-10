// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be define", () => {
            expect(divide).toBeDefined()
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2)
            expect(divide('',1)).toEqual(undefined)
            expect(divide(1,'')).toEqual(undefined)
            expect(divide(true,1)).toEqual(undefined)
            expect(divide(1,true)).toEqual(undefined)
        });
        it("should return the devision of the two numbers", () => {
            expect(divide(4,2)).toEqual(2)
            expect(divide(648,12)).toEqual(54)
        });
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined)
            expect(divide(1)).toEqual(undefined)
            expect(divide(undefined,1)).toEqual(undefined)
        });

    })    
})