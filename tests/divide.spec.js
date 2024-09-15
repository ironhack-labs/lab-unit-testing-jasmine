// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(9, 3)).toBe(3);
            expect(divide(20, 5)).toBe(4);
            expect(divide(3, 4)).toBe(0.75);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(5)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide("a", 1)).toEqual(undefined);
            expect(divide(1, "a")).toEqual(undefined);
            expect(divide("a", "a")).toEqual(undefined);
        });
    })    
})

