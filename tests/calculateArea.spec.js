// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        
        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
             expect(calculateArea (2, 3)).toBe(6)
             expect(calculateArea (4, 8)).toBe(32)
        });
        it("In case any of the arguments is not provided, the function should return undefined.", () => {
             expect(add(1)).toEqual(undefined)
        }); 
 })
})
 

//The function should be defined.
//The function should take two numbers as arguments.
//The function should return a number representing the area of a rectangle (the product of the two arguments).
//In case any of the arguments is not provided, the function should return undefined.