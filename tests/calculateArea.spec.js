describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        
        it("should return the area of the rectangle based on the two arguments", () => {
            expect(calculateArea(2, 3.5)).toEqual(7);
            expect(calculateArea(2, 3)).toEqual(6);
        });

        it("should return a string with info if any of the values is negative", () => {
          expect(calculateArea(2, -3.5)).toEqual('No negative values');
          expect(calculateArea(-2, 3)).toEqual("No negative values");
          expect(calculateArea(-2, -3)).toEqual("No negative values");
        });
        
        it("should return undefined if any of the arguments aren't provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(2)).toEqual(undefined);
            expect(calculateArea(undefined, 3)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
          expect(calculateArea('Bob', 'Mary')).toEqual(undefined);
          expect(calculateArea(2, '2')).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is NaN", () => {
          expect(calculateArea(NaN, 2)).toEqual(undefined);
          expect(calculateArea(2, NaN)).toEqual(undefined);
          expect(calculateArea(NaN, NaN)).toEqual(undefined);
        });

    })    
})

