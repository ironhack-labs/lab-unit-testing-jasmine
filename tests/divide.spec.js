// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2);
        });

        it("he function should return the division of the two numbers.", () => {
            expect(divide(6, 2)).toEqual(3);
            expect(divide(4, 2)).toEqual(2);
            expect(divide(100, 4)).toEqual(25);
        });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(2)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
        });

    })    
})
