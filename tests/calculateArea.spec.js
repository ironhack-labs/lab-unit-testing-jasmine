// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
         });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
            });

        it("should return the division of the two numbers", () => {
            expect(calculateArea(8, 2)).toEqual(16);
            expect(calculateArea(200, 10)).toEqual(2000);
            expect(calculateArea(1, 2)).toEqual(2);
          });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("string", 4)).toEqual(undefined);
            expect(calculateArea(-20, "5")).toEqual(undefined);
            expect(calculateArea("3", "7")).toEqual(undefined);
          })

    })    
})
