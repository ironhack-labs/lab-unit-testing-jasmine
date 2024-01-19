// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", function() {
            expect(calculateArea).toBeDefined();
        }); 

        it("should take two numbers as arguments", function() {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (multiply both sides)", function() {
            expect(calculateArea(6,2)).toEqual(12);
            expect(calculateArea(46,4)).toEqual(184);
            expect(calculateArea(100,5)).toEqual(500);
        });

        it("should return undefined if any of the arguments is not provided", function() {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea(undefined, 6)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", function() {
            expect(calculateArea(10, "5")).toEqual(undefined);
            expect(calculateArea(8, true)).toEqual(undefined);
            expect(calculateArea("divide", "100")).toEqual(undefined);
        });

    })    
})



