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
        it("The function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2,2)).toEqual(4);
            expect(calculateArea(6,6)).toEqual(36);
        });
        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined,1)).toEqual(undefined);
            expect(calculateArea(1,undefined)).toEqual(undefined);
        });
        it("The function should return undefined if any of the two arguments is not a number", () => {
            expect(add(1,"2")).toEqual(undefined);
            expect(add("1",2)).toEqual(undefined);
            expect(add("1","2")).toEqual(undefined);
        });
    })    
})

// The function should be defined.
// The function should take two numbers as arguments.
// The function should return a number representing the area of a rectangle (the product of the two arguments).
// In case any of the arguments is not provided, the function should return undefined.
