// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(100, 2)).toEqual(50);
            expect(divide(25, 5)).toEqual(5);
            expect(divide(134.2, 4)).toEqual(33.55);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(3)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2368)).toEqual(undefined);
        });

        it("should return NaN if any of the two arguments is not a number", () => {
            expect(divide(35, "string")).toEqual(NaN);
            expect(divide(null, 2)).toEqual(NaN);
            expect(divide(["hello World!"], 347)).toEqual(NaN);
            expect(divide(true, "patata")).toEqual(NaN);
        });

    })    
})

