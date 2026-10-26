// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("\nshould take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("\nshould return the division of the two numbers", () => {
            expect(divide(10,2)).toEqual(5);
            expect(divide(1,2)).toEqual(0.5);
            expect(divide(-10,2)).toEqual(-5);
            expect(divide(0.8,2)).toEqual(0.4);
        });

        it("\nshould return undefined if any of the arguments is not provided", () => {
            expect(divide()).toBeUndefined();
            expect(divide(1)).toBeUndefined();
            expect(divide(1, undefined)).toBeUndefined();
        });
        it("\nshould return undefined if any of the two arguments is not a number", () => {
            expect(divide("a",2)).toBeUndefined();
            expect(divide(1,"b")).toBeUndefined();
        });
        it("should return undefined if divisor is 0", () => {
            expect(divide(2, 0)).toBeUndefined();
        });
      

    })    
})
