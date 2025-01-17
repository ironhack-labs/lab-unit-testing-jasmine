// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
       it("should be defined", () => {
         expect(calculateArea).toBeDefined();
       });

       it("should take two numbers as arguments", () => {
         expect(calculateArea.length).toBe(2);
       });

       it("should return the division of the two numbers.", () => {
         expect(calculateArea(6, 3)).toEqual(18);
         expect(calculateArea(20, 5)).toEqual(100);
         expect(calculateArea(27, 9)).toEqual(243);
       });

       it("should return the division of the two numbers.", () => {
         expect(calculateArea()).toEqual(undefined);
         expect(calculateArea(1, undefined)).toEqual(undefined);
         expect(calculateArea(undefined, 1)).toEqual(undefined);
       });

       it("Should return undefined if any of the two arguments is not a number", () => {
         expect(calculateArea("string", "string")).toEqual(undefined);
         expect(calculateArea(null, 1)).toEqual(undefined);
         expect(calculateArea(1, false)).toEqual(undefined);
       });

    })    
})

