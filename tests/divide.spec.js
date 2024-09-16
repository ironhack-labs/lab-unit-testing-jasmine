



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
     it("should take two arguments", () => {
        expect(dicide.length.toBe(2))
     })
     it("should return the division of the two numbers", () => {
        expect(divide(6, 2)).toEqual(3);
        expect(divide(10, 5)).toEqual(2);
        expect(divide(8, 4)).toEqual(2);
     })
     it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(6)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(8, 4, 2)).toEqual(undefined);
    }) 
    it("should handle division by zero", () => {
        expect(divide(6, 0)).toBe(Infinity);
        expect(divide(0, 0)).toBeNaN();
    }); 
});    
});