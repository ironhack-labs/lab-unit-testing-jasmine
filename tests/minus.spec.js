describe("Iteration 4 |calculateDifferences", () => {
    describe("Function minus", () => {
      it("should be defined", () => {
        expect(minus).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(minus.length).toBe(2);
      });
  
      it("should return the remainder of the two numbers", () => {
        expect(minus(1, 2)).toEqual(-1);
        expect(minus(3, 7)).toEqual(-4);
        expect(minus(50, 100)).toEqual(-50);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(minus(1)).toEqual(undefined);
        expect(minus()).toEqual(undefined);
        expect(minus(undefined, 1)).toEqual(undefined);
      });
  });
});