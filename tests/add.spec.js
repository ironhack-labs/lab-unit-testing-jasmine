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

      it("should return undefined if any of the two arguments is not a number",() => {
        expect(add('1', '2')).toEqual(undefined);
        expect(add(1, '2')).toEqual(undefined);
        expect(add('1', 2)).toEqual(undefined);
      })
    });
  });
  
  /*Review the Tests

How many tests are there for the add function in the add.spec.js file?

How are the blocks describe and it being used in the tests? What is the purpose of each?

How are the test descriptions phrased? Are there any keywords that stand out?

What do the expect functions do, and what input do they take?*/