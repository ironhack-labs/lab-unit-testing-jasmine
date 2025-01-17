// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // function should be defined 
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2);
        });
        
        it("The function should return the division of the two numbers.", () => {
            expect(divide(2,1)).toEqual(2);
            expect(divide(4,2)).toEqual(2);
            expect(divide(3,2)).toEqual(1.5);
            expect(divide(6,3)).toEqual(2);
        });
        
        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(1)).toEqual(undefined);
            expect(divide(undefined,2)).toEqual(undefined);
        });

    })    
})

