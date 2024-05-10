describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("Should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("Should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("Should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("Should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });

      it("Should return undefined if any of the two arguments is not a number.", () => {
        expect(add(NaN)).toEqual(undefined);
        expect(add("a")).toEqual(undefined);
      });
    });
  });
  