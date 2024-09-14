describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined.", () => {
            expect(divide).toBeDefined();
        });

        
        it("should take two arguments.", () => {
            expect(divide.length).toBe(2);
        });

        it("should return undefined if any of the arguments is not Number", () => {
            expect(divide('10')).toBe(undefined);
            expect(divide(10,'2')).toBe(undefined);
        });

        it("should return the division of the two numbers.", () => {
            expect(divide(10,5)).toBe(2);
            expect(divide(20,2)).toBe(10);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toBe(undefined);
            expect(divide(10)).toBe(undefined);
            expect(divide(10, undefined)).toBe(undefined);
        });

    })    
})
