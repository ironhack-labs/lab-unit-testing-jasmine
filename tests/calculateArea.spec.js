// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
    
        it("should return the division of the two numbers", () => {
            expect(calculateArea(6, 2)).toEqual(12);
            
        });
        
        it("should take two numbers as arguments", () => {
            expect(calculateArea("", null)).toEqual(undefined);
            expect(calculateArea("5", 5)).toEqual(undefined);
            expect(calculateArea(5, "5")).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(5, undefined)).toEqual(undefined);
            expect(calculateArea(undefined, 5)).toEqual(undefined);
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
        

    })    
})

