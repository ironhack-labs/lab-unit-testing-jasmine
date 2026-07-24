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
      expect(add("2", 5)).toEqual(undefined);
      expect(add(1, true)).toEqual(undefined);
      expect(add([], "5")).toEqual(undefined);
    });
  });
});
  

/*

Review :

1. We have 4 tests, which we can recognize them by the function 'it'
2. We use 'describe' to group our tests together and 'it' for test cases
3. We can see all the tests descriptions begin with the word 'should', to explain what we expect from the tests who are inside the function 'it' 
4. 'expect' is used to compare what we get from the function to what we expect

*/