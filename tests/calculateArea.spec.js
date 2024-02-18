// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("Should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the product of the two arguments", () => {
            expect(calculateArea(2, 5)).toEqual(10);
            expect(calculateArea(8, 5)).toEqual(40);
            expect(calculateArea(10, 20)).toEqual(200);
        });

        it("Should return undefined if any or the two arguments aren't provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(2, undefined)).toEqual(undefined);
        });

    })    
});
