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
          expect(add(1)).toBeUndefined();
          expect(add()).toBeUndefined();
          expect(add(undefined, 1)).toBeUndefined();
      });

      it("should return undefined if either argument is not a number", () => {
          expect(add(1, '2')).toBeUndefined();  // non-numeric string input
          expect(add('1', 2)).toBeUndefined();  // non-numeric string input
          expect(add('1', '2')).toBeUndefined();  // both arguments are strings
          expect(add(1, null)).toBeUndefined();  // one argument is null
          expect(add(1, {})).toBeUndefined();  // one argument is an object
          expect(add(1, [])).toBeUndefined();  // one argument is an array
      });
  });
});
