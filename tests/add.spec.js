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
        expect(add(1, "2")).toEqual(undefined);
        expect(add("3", 4)).toEqual(undefined);
        expect(add("100", "47")).toEqual(undefined);
      });
    });
  });
  
  //1- there is 1 test for the add function
  //2- "describe" and "it" are being used to let the user know what are their challanges, in the form of sentences. While "it" is holdoing functions that will execute to run the tests.
  //3- the word "should" stands out as it is not mandatory but indicates how the user has to interpret 
  //4- Expect functions, are followed by a matcher, and they are used to compare values. we should let jasmine know if the test should return true or false in order to keep it going, or represent failure to stop the test.
  //5- 