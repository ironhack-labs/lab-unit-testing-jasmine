// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("The function should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("The function should return a number representing the area of a rectangled", () => {
            expect(calculateArea(2,3)).toEqual(6);
            expect(calculateArea(2.5,2)).toEqual(5);
        });

        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(12)).toEqual(undefined);
        });

        it("The function should return undefined if any of the argument not is a number", () => {
            expect(calculateArea("12",1)).toEqual(undefined);
            expect(calculateArea(1,"12")).toEqual(undefined);
            expect(calculateArea(true,"12")).toEqual(undefined);
        });

        it("The function should return undefined if any of the argument is less or equal than 0", () => {
            expect(calculateArea(0, 4)).toEqual(undefined);
            expect(calculateArea(4, 0)).toEqual(undefined);
            expect(calculateArea(-2, -7)).toEqual(undefined);
        });

    })    
})