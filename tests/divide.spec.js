
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2);
        });
        it("The function should return the division of the two numbers.", () => {
            expect(divide(6, 2)).toEqual(3);
            expect(divide(2, 25)).toEqual(0.08);
            expect(divide(-20, 2)).toEqual(-10);
            expect(divide(54, 23)).toBeCloseTo(2.34782, 2);
            expect(divide(6, 0)).toBe(Infinity);
            expect(divide(6, -2)).toEqual(-3);
        });
        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(undefined, 1) || divide(1, undefined)).toEqual(undefined);
        });

    })    
})
