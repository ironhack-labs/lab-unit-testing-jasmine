describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
          });

        it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(10, 2)).toEqual(20);
            expect(calculateArea(15, 3)).toEqual(45);
            expect(calculateArea(100, 50)).toEqual(5000);
        
    })    
        it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
         it("should return undefined if any of the two arguments is not a number", () =>{
        expect(calculateArea("12", 1)).toBeUndefined();
        expect(calculateArea(1, "30")).toBeUndefined();
        expect(calculateArea("string", "string")).toBeUndefined();
      })
    });
});
