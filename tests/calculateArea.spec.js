// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined;
        });
        it("should take two numbers as arguments.", () => {
            expect (calculateArea(1,"2")).toEqual(undefined);
            expect (calculateArea("3",4)).toEqual(undefined);
            expect (calculateArea("100","47")).toEqual(undefined);
        });
        it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(10,2)).toEqual(20);
        });
        it("should return undefined in case any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        }); 
    })    
})
