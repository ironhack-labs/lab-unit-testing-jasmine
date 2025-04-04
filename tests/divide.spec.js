// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
         });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
            });

        it("should return the division of the two numbers", () => {
            expect(divide(8, 2)).toEqual(4);
            expect(divide(200, 10)).toEqual(20);
            expect(divide(1, 2)).toEqual(0.5);
          });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide("string", 4)).toEqual(undefined);
            expect(divide(-20, "5")).toEqual(undefined);
            expect(divide("3", "7")).toEqual(undefined);
          })
    })    
})



