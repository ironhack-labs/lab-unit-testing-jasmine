describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the arguments is NaN", () => {
        expect(add(5, 10)).not.toBeUndefined();
        expect(add(5, NaN)).toBeUndefined();
        expect(add(NaN, 10)).toBeUndefined();
        expect(add("hello", 10)).toBeUndefined();
        expect(add(5, "word")).toBeUndefined();
        expect(add("hello", "word")).toBeUndefined();
      });
    });
  });
  