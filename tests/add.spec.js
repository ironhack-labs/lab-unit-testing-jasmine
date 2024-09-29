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
      it("should return undefined if any of the two arguments is not a number.", () => {
        expect(add("1",2)).toEqual(undefined);
        expect(add(3,"4")).toEqual(undefined);
        expect(add("100","47")).toEqual(undefined);
    });
  });
}
)



  
//   Review the Tests

// How many tests are there for the add function in the add.spec.js file?
//There are 4 tests

// How are the blocks describe and it being used in the tests? What is the purpose of each?
//There are 2 describe blocks and 4 it blocks.
//Purpose of describe block is like the title of test.
//Purpose of it block is to show the expectations' description

// How are the test descriptions phrased? Are there any keywords that stand out?
//They are phrased by iterations and functions, and keywords appear as arguments, sum, to be defined, etc.

// What do the expect functions do, and what input do they take?
//expect the function is defined; input:toBeDefined();
//expect the arguments of the function are 2; input: toBe(number)
//expect the function has 2 numbers and the return will be equal to the sum of both; input: toEqual(sum);
//expect the function to return undefined if there is only one argument, no argument or one of them is not a number; input: toEqual(undefined);
