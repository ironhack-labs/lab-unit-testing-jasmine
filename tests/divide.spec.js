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
            expect(divide(6,3)).toEqual(2);
            expect(divide(120,10)).toEqual(12);
        })

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 5)).toEqual(undefined);
        })

    })    
})

