// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
          it("should return the multiplying of the two numbers", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(100, 50)).toEqual(5000);
          });
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
          it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("a",1)).toBeUndefined();
            expect(calculateArea(1,"a")).toBeUndefined();
            expect(calculateArea("a","a")).toBeUndefined();
          });
    })    
})
