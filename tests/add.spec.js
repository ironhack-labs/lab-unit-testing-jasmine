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

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(add(1, "2")).toEqual(undefined);
      expect(add("3", 4)).toEqual(undefined);
      expect(add(true, 5)).toEqual(undefined);
      expect(add(6, null)).toEqual(undefined);
      expect(add({}, 7)).toEqual(undefined);
      expect(add(8, [])).toEqual(undefined);
    });
  });
});

// There are 4 tests for the add function

// Describe block -> 1 is used to group all related the tests together
//                -> 2 is used to group the tests related to add function
// It defines an individual test case
//    -> 1 ensures that the add function is defined
//    -> 2 ensures that are passed 2 arguments
//    -> 3 ensures that the sum is returned
//    -> 4 ensures that undefined is returned when no arguments are passed

// The test descriptions are phrased with 'Should return... should add...
// Keywords that stand ou are 'should', 'return', 'it'

//The expect functions creates an expectation, it checks a certain condition and
// compares it to the expected result
// the input which is taken is the function add
