// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        }); 
    
    it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });

      it("should return the division of the two numbers", () => {
        expect(divide(4, 2)).toEqual(2);
        expect(divide(12, 4)).toEqual(3);
        expect(divide(100, 10)).toEqual(10);
      });

      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });
      it("should return undefined", () => {
        expect( divide(1, "2") ).toEqual(undefined);
        expect( divide("3", 4) ).toEqual(undefined);
        expect( divide("100", "47") ).toEqual(undefined);
      });

      function divide(a,b) {
        if (typeof a !== "number" || typeof b !== "number"){
            return undefined;
        }
        return a / b;
      }
    });
});

