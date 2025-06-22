
// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined;
        });

        it("should take two numbers as arguments", () => {
            expect(typeof calculateArea).toBe("number");
        });

        it("The function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2, 6)).toBe(12);
            expect(calculateArea(10, 20)).toBe(200);
            expect(calculateArea(3, 9)).toBe(27);

        });

        it("should return undefined if any of the argument is not provided", () => {
            expect(calculateArea(undefined, 3)).toBe(undefined);
            expect(calculateArea(10, undefined)).toBe(undefined);
        })

})})
   
        
       
        

