// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("the function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("the function should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(140, 2)).toEqual(70);
            expect(divide(-100, 2)).toEqual(-50);
        });

        it("the function should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(1)).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
            expect(divide(70, undefined)).toEqual(undefined);
        });

        it("the function should return undefined if any of the arguments is not a number", () => {
            expect(divide("a", 1)).toEqual(undefined);
            expect(divide(1, "a")).toEqual(undefined);
            expect(divide(true, 2)).toEqual(undefined);
            expect(divide([], undefined)).toEqual(undefined);
        });
    })    
})

