describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers.", () => {
            expect(divide(16, 4)).toEqual(4);
            expect(divide(100, 2)).toEqual(50);
            expect(divide(18, 3)).toEqual(6)
        });

        it("should return undefined if any of the arguments is not provided", () => {
           expect(divide(1)).toEqual(undefined);
           expect(divide()).toEqual(undefined);
           expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number.", () => {
            expect(add("5", true)).toEqual(undefined);
            expect(add("4", "5")).toEqual(undefined);
            expect(add("4", 5)).toEqual(undefined)
          });

    })    
})
