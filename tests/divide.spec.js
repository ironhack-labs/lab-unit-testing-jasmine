// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide()).toEqual();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
            expect(divide(1,2)).toBeDefined();
            expect(divide("3", 5)).toBeUndefined();
            expect(divide(3, "5")).toBeUndefined();
        });

        it("should return the division of the two numbers", () => {
            expect(divide(6,2)).toEqual(3);
            expect(divide(-10,2)).toEqual(-5);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(2)).toBeUndefined();
            expect(divide(undefined,1)).toBeUndefined();
            expect(divide(4,null)).toBeUndefined();
        });
    })    
})
