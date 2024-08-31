describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });

          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });

          it("should return the multiplication of two numbers", () => {
            expect(calculateArea(4, 4)).toEqual(16);
            expect(calculateArea(3, 5)).toEqual(15);
            expect(calculateArea(20, 4)).toEqual(80);
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    })    
})
