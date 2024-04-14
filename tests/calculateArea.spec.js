// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("The function must be declarated", () => {
            expect(calculateArea).toBeDefined();
        });
        
        it("Should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        }); 

        it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea (4, 2)).toEqual(8);
            expect(calculateArea (7, 2)).toEqual(14);
            
        }); 

        it("In case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(1, undefined)).toEqual(undefined);
            expect(calculateArea(undefined, undefined)).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    })    
})

