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
    // Write a new unit test
    it("should return undefined if any of the two arguments is not a number", () => {
      expect(add("")).toEqual(undefined);
      expect(add(true, 2)).toEqual(undefined);
      expect(add(3, false)).toEqual(undefined);
    });
  });
});

// Iteration 1:

//Review the tests
// 1: 4 tests
// 2: it is a fonction, 1st parameter is a string that describe what we want in the test.It is mandatory.  Describe give us the opportunity to create block / section of tests.
// 3: should is use at the begining of each sentences + verbe.
// 4:
