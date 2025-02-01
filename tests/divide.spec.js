// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
    
        it("should be defined", () => {
            expect(divide).toBeDefined(); 
        });
        it ("it should take two arguments",() => {
            expect(divide.length).toBe(2);
        });
        it ("should return the division of the two numbers",() => {
            expect(divide(6,3)).toEqual(2);
        });
        it("should return undefined if no arguments provided",() => {
            expect(divide(undefined,1)).toEqual(undefined);
            expect(divide(1,"2")).toEqual(undefined)
            expect(divide() ).toEqual(undefined)
        });

    });    
})

