// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers with max 3 decimals after comma", () => {
            expect(divide(10.0, 3.0)).toBeCloseTo(3.333, 3);
            expect(divide(12.0, 4.0)).toBeCloseTo(3.000, 3);
            expect(divide(5555.0, 27.0)).toBeCloseTo(205.741, 3);
        });

        it("should return undefined if the divisor is zero", () => {
            expect(divide(1110.0, 0.0)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
    })    
})
