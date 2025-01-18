// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        
        it("The function should return the division of the two numbers", () => {
            expect(divide(10, 5)).toEqual(Math.ceil(2));
            expect(divide(340, 22)).toEqual(Math.ceil(15.45));
            expect(divide(50, 10)).toEqual(Math.ceil(5));
            expect(divide(7, 1)).toEqual(Math.ceil(7));
        });
        
        it("The function should return NaN if the second argument is equal 0", () => {
            expect(divide(50, 0)).toEqual(NaN);
        });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(7)).toEqual(undefined);
            expect(divide(96, undefined)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });
        
        it("The function should return undefined if any of the two arguments is not a number", () => {
            expect(divide("4", 7)).toEqual(undefined);
            expect(divide(96, "50")).toEqual(undefined);
            expect(divide("14630", "241")).toEqual(undefined);
            expect(divide({}, 54)).toEqual(undefined);
            expect(divide([10], 54)).toEqual(undefined);
        });
        
    });
});