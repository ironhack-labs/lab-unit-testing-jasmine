describe("Iteration 2", () => {
    describe("Function - divide", () => {
      it("The function should be defined.", () => {
        expect(divide).toBeDefined();
      });


      it("The function should take two numbers as arguments.", () => {
        expect(divide.length).toBe(2);
      });


      it("The function should return the division of the two numbers.", () => {
        expect(divide(5,5)).toEqual(1);
        expect(divide(10,2)).toEqual(5);
        expect(divide(20,4)).toEqual(5);
      });


      it("The function should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide(undefined,5)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
      })
    });    
});

