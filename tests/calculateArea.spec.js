// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
        it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(10, 2)).toEqual(20);
            expect(calculateArea(100, 50)).toEqual(5000);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
    })    
})

