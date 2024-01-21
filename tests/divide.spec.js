// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
            expect(divide('1', 1)).toBe("Please enter two numbers.");
            expect(divide(1, '1')).toBe("Please enter two numbers.");
            expect(divide('1', '1')).toBe("Please enter two numbers.");
        });

        it("should return the division of the two numbers", () => {
            expect(divide(144, 12)).toBe("144 divided by 12 is 12.");
            expect(divide(81, 10)).toBe("81 divided by 10 is 8 remainder 1, or 8.1.");
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toBe(undefined);
            expect(divide()).toBe(undefined);
            expect(divide(undefined, 1)).toBe(undefined);
        });
    })    
})
