// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("The function should return a number representing the area of a rectangle ", () => {
            expect(calculateArea(2, 5)).toBe(10);
            expect(calculateArea(1, 2)).toBe(2);
            expect(calculateArea(4, 3)).toBe(12);
        });

        it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
            
        });

    })    
})

