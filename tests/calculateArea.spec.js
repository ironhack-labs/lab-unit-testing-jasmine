// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(add).toBeDefined();
          });
      
          it("should take two arguments", () => {
            expect(add.length).toBe(2);
          });

          it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(2, 3)).toEqual(6);
            expect(calculateArea(4, 5)).toEqual(20);
            expect(calculateArea(10, 10)).toEqual(100);
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });

          it("should return undefined if any of the two arguments is not a number", () => {
            expect( add(1, "2") ).toEqual(undefined);
            expect( add("1", 2) ).toEqual(undefined);
            expect( add("1", "2") ).toEqual(undefined);
          });
    })    
})