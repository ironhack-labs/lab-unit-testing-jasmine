describe("Iteration 2", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
    });
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should divide two numbers together", () => {
            expect(divide(2, 2)).toEqual(1);
            expect(divide(4, 2)).toEqual(2);
            expect(divide(40, 2)).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
        it("should return undefined if any of the arguments are not numbers", ()=> {
            expect(divide(2, "2")).toEqual(undefined);
            expect(divide("4", 2)).toEqual(undefined);
            expect(divide("40", "2")).toEqual(undefined);
    });    
});

});