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

        it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(2, 1)).toEqual(2);
            expect(calculateArea(2, 3)).toEqual(6);
            expect(calculateArea(1.8461538461, 3)).toBeCloseTo(5.53846, 2);
            expect(calculateArea(20, 20)).toEqual(400);
            expect(calculateArea(2.5, 1.2)).toEqual(3);
            expect(calculateArea(2.6, 1.2)).toEqual(3.12, 5);
        });

        it("In case any of the arguments is negative or zero, the function should return undefined", () => {
            expect(calculateArea(0, 1) || calculateArea(1, 0)).toEqual(undefined)
            expect(calculateArea(-2, 1) || calculateArea(1, -2)).toEqual(undefined)
        });

        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea(undefined, 1) || calculateArea(1, undefined)).toEqual(undefined)
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("1", 1) || calculateArea(1, "2")).toEqual(undefined);
          });

    })    
})
