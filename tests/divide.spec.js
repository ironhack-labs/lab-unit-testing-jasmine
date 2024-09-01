describe("Iteration 2 | Dividir", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(divide(1, 2)).toEqual(0.5);
        expect(divide(4, 2)).toEqual(2);
    
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

    });
  });
  