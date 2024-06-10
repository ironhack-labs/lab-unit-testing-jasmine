// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be defined", () => {
            expect(calculateArea).toBeDefined();

        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);

        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2,3)).toEqual(6);
            expect(calculateArea(9,3)).toEqual(27);
            expect(calculateArea(5,5)).toEqual(25);


        });

        it("if any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(1, undefined)).toEqual(undefined);
            expect(calculateArea(undefined, 3)).toEqual(undefined);

        });

        it("any of the arguments is not a number, the function should return undefined", () => {
            expect(calculateArea('1')).toEqual(undefined);
            expect(calculateArea('2', 5)).toEqual(undefined);
            expect(calculateArea('3', 3)).toEqual(undefined);

        });

    })    
})