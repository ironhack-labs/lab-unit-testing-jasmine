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
            expect(divide(8, 8)).toEqual(1);
            expect(divide(14, 7)).toEqual(2);
            expect(divide(500, 100)).toEqual(5);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1,"joy")).toEqual(undefined);
            expect(divide("happy",2)).toEqual(undefined);
            expect(divide("cheer","joy")).toEqual(undefined);
          });
    });   
});

