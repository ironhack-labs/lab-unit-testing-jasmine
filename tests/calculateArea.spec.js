// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 3', () => {
    describe('Function - calculateArea', () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it('should be defined', () => {
            expect(calculateArea).toBeDefined();
        });
        it('should take two numbers as arguments', () => {
            expect(calculateArea.length).toBe(2);
        });
        it('should return a number representing the area of a rectangle', () => {
          expect(calculateArea(6, 3)).toBe(18);
          expect(calculateArea(10, 2)).toBe(20);
        });
        it("should return undefined if any of the arugments are not defined", () => {
            expect(calculateArea(1)).toBe(undefined);
            expect(calculateArea(undefined,1)).toBe(undefined);
        });
    });
})
