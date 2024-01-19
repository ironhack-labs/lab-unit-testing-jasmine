describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(divide(2, 2)).toEqual(1);
        expect(divide(3, 6)).toEqual(0.5);
        expect(divide(100, 20)).toEqual(5);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the two arguments is not a number", () => {
        expect(divide("lala", "lolo")).toEqual(undefined);
        expect(divide(1, "lolo")).toEqual(undefined);
        expect(divide("lala", 100)).toEqual(undefined);
      });
    });
  });
  