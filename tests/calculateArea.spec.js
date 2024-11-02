// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as argument", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(2,4)).toEqual(8);
            expect(calculateArea(4,4)).toEqual(16);
            expect(calculateArea(8,4)).toEqual(32);
    
        });
        it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(4)).toEqual(undefined);
            expect(calculateArea(6,undefined)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            
        });


    })    
})

//it("", () => {});