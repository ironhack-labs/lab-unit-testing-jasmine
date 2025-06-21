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

      it("should return undefined if any of the arguments is not a number", () => {
        expect(add("a", 1)).toEqual(undefined);
        expect(add("a", "b")).toEqual(undefined);
        expect(add(1, "b")).toEqual(undefined);
      });
    });
  });
  
  /* Review Test
  1. There are 4 tests for the add function
  2. "Describe" is used first name the test, 
  the second description describes the main action/task.
  "it" is a more definded description of what the function should be able tot do
  3. The test descriptions are phrased in () and "", followed by a comma and empty ().
  "describe" is followed by very simple keywords that describe the context
  "it" describes an action starting with "should".
  4. "Expect" are similar to console.log, describing the expected output. 
  after the keyword "expect" it follows ()inside the function is called with different cases/examples.
  after the function in () follows .toEqual/.toBe and the expected result in ().
  This way different cases are tested.
  */