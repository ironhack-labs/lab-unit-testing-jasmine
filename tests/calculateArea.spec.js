describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
       it("should be defined", () => {
         expect(calculateArea).toBeDefined();
       });

       it("should return the area of a rectangle when both arguments are provided", () => {
         expect(calculateArea(6, 10)).toBe(60);
         expect(calculateArea(4, 12)).toBe(48);
       });

       it("should return undefined if any of the arguments is not provided", () => {
         expect(calculateArea(5)).toBeUndefined();
         expect(calculateArea()).toBeUndefined();
       });
    })    
})

