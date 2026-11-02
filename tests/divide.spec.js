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
        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(30, 15)).toEqual(2);
            expect(divide(300, 3)).toEqual(100);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide(20, undefined)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(1, "5")).toEqual(undefined);
            expect(divide("3", 6)).toEqual(undefined);
            expect(divide("20", "10")).toEqual(undefined);
        });

    })    
})

