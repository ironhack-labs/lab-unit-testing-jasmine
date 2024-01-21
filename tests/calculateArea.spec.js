// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });

        it("should return the area of a rectangle", () => {
            expect(calculateArea(5, 2)).toEqual(10);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(10, 4)).toEqual(40);
          });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1,"joy")).toEqual(undefined);
            expect(calculateArea("happy",2)).toEqual(undefined);
            expect(calculateArea("cheer","joy")).toEqual(undefined);
          });

    })    
})

