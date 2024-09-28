describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take 2 arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of 2 numbers", () => {
            expect(divide(3, 3)).toEqual(1);
            expect(divide(10, 2)).toEqual(5);
            expect(divide(0, 2)).toEqual(0);
        });

        it("should return undefined if any arguments aren't provided", () => {
          expect(divide()).toEqual(undefined);
          expect(divide(undefined, 3)).toEqual(undefined);
          expect(divide(10)).toEqual(undefined);
          expect(divide(undefined, undefined)).toEqual(undefined);
        });


        it("should return undefined if any arguments aren't numbers", () => {
            expect(divide('3',3)).toEqual(undefined);
            expect(divide(10, true)).toEqual(undefined);
            expect(divide('CS', '101')).toEqual(undefined);
        });

        it("should return undefined if any arguments are NaN", () => {
          expect(divide(NaN, 3)).toEqual(undefined);
          expect(divide(10, NaN)).toEqual(undefined);
          expect(divide(NaN, NaN)).toEqual(undefined);
        });

        it("should return a string explaining the issue if the 2nd parameter is 0", () => {
            expect(divide(10, 0)).toEqual("Cannot divide by 0");
        });

    });    
    
});

