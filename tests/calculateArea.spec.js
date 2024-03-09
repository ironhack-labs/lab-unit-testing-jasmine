// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
            
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
    
        it("should return the sum of the two numbers", () => {
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(4, 5)).toEqual(20);
            expect(calculateArea(30, 10)).toEqual(300);
        });
    
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

    })    
})

