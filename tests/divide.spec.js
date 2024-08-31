describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide("notNumber", 1)).toBeUndefined();
            expect(divide(1, "notNumber")).toBeUndefined();
        });

        it("should return the division of the two numbers", () => {
            expect(divide(6, 2)).toEqual(3);
            expect(divide(100, 4)).toEqual(25);
            expect(divide(1000, 5)).toEqual(200);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
    })    
})