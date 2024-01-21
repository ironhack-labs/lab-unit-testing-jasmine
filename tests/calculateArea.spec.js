// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined()
        });
        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(35, 2)).toEqual(70);
            expect(calculateArea(5, 10)).toEqual(50);
            expect(calculateArea(20, 2)).toEqual(40);  
        });
        it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(1,"1")).toEqual(undefined);
            expect(calculateArea("1", 1)).toEqual(undefined);
            expect(calculateArea("1", "1")).toEqual(undefined);  
          
        });

    });
});   


