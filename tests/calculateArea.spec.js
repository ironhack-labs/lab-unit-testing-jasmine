// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
          it("should return the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(3, 2)).toEqual(6);
            expect(calculateArea(7, 9)).toEqual(63);
            expect(calculateArea(10, 10)).toEqual(100);
          });
          
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    })    
})
