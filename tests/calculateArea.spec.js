// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toEqual(2);

        });
        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(6, 3)).toEqual(18);
            expect(calculateArea(34,0)).toEqual(0);
            expect(calculateArea(100,100)).toEqual(10000);
        });
        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(34)).toEqual(undefined);
            expect(calculateArea("",34)).toEqual(undefined);
            expect(calculateArea("23",34)).toEqual(undefined);
            expect(calculateArea(22,"22")).toEqual(undefined);
        });

    })    
})




/*
The function should be defined.
The function should take two numbers as arguments.
The function should return a number representing the area of a rectangle (the product of the two arguments).
In case any of the arguments is not provided, the function should return undefined.
*/