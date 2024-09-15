// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two aeguments", () => {
            expect(add.length).toBe(2);
        });

        it("The function should return the division of the two numbers", () => {
            expect(divide(4, 2)).toBe(2);
            expect(divide(8, 2)).toBe(4);
            expect(divide(4, 1)).toBe(4);
            expect(divide(5, 2)).toBe(2.5);
            expect(divide(3, 2)).toBe(1.5);
        });

        it ("The function should return undefined if any of the arguments if any of the arguments is not provided", () => {
            expect(divide(2)).toBe(undefined); 
            expect(divide(4)).toBe(undefined);
            expect(divide( )).toBe(undefined);
            expect(divide(0)).toBe(undefined);   
        });
    }); 
});

