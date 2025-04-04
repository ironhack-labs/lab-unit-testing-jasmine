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
        expect(add("1", "1")).toEqual(undefined);
        expect(add("1", 1)).toEqual(undefined);
        expect(add(1, "1")).toEqual(undefined);
      });
    });
  });

  /*
  1. There are 8 tests.
  2. Describe and It are being used to organise and write the tests, describe nreaks the test suite into components and it is for individual tests.
  3. The test descriptions are phrased so that a human reading them can understand what the test is for, the word should stands out as they describe what should happen to pass the test.
  4. The expect functions describe a potential scenario that the tested function might encounter and the outcome we would expect to occur if the function passes the test successfully.
     The expect function take in the tested function with some arguments as input, the output of which is compared to the toEqual function to determine if the test was a success.
  */