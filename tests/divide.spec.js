// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        })

        it("should take two numbers as arguments", () => {
            expect(divide(NaN,9)).toBeUndefined();
            expect(divide(9,NaN)).toBeUndefined();
        });

        it("should return the division of the two numbers", () => {
            expect(divide(4,2)).toEqual(2);
            expect(divide(50,2.5)).toEqual(20);
            expect(divide(2,4)).toEqual(0.5);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toBeUndefined();
            expect(divide(undefined,2)).toBeUndefined();
            expect(divide()).toBeUndefined();
        });

    })    
})
