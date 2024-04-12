describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
        
        it("The function should return the division of the two numbers.", () => {
            expect(calculateArea(10,5)).toBe(50);
            expect(calculateArea(5,5)).toBe(25);

          });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });

    })    
})

