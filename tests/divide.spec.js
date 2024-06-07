// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
            expect(divide("string", 1)).toEqual(undefined);
            expect(divide(2, "string")).toEqual(undefined);
            expect(divide(null, 1)).toEqual(undefined);
            expect(divide(2, null)).toEqual(undefined);
            expect(divide([], 1)).toEqual(undefined);
            expect(divide(2, [])).toEqual(undefined);
            expect(divide({}, 1)).toEqual(undefined);
            expect(divide(2, {})).toEqual(undefined);
            expect(divide(true, 1)).toEqual(undefined);
            expect(divide(2, false)).toEqual(undefined);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(10, 5)).toEqual(2);
            expect(divide(50, 10)).toEqual(5);
            expect(divide(18, 3)).toEqual(6);
            expect(divide(116, 4)).toEqual(29);
            expect(divide(3, 4)).toEqual(0.75);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if the second number is 0", () => {
            expect(divide(1, 0)).toEqual(undefined);
          });
    });    
});
