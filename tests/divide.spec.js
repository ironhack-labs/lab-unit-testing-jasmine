// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it("should have two arguments", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(40, 20)).toEqual(2);
        });
        
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divided()).toEqual(undefined);
            expect(divided(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1,"2")).toEqual(undefined);
            expect(divide("3", 4)).toEqual(undefined);
            expect(divide("40", "20")).toEqual(undefined);
            
            
        });

    })    
})

