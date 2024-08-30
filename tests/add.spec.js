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
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(5)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 7)).toEqual(undefined);
      });

      it("should return undefined if any of the arguments is not a number", () => {
        expect(add(6, "a")).toEqual(undefined);
        expect(add("a", 9)).toEqual(undefined);
        expect(add("a", "b")).toEqual(undefined);
    });
    });
  });
  