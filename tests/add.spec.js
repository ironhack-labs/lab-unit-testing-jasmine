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
      expect(add(" ", " ")).toEqual(undefined);
      expect(add([1], [2])).toEqual(undefined);
      expect(add({ a: 1 }, { b: 2 })).toEqual(undefined);
      expect(add(true, false)).toEqual(undefined);
    });
  });
});

/*

Review the Tests

    1. How many tests are there for the add function in the add.spec.js file?
        First we must create two tests for the declaration of each arguments , then create a test to test if each arguments 
        defined or not and we must create a test to define that numOne and numTwo are numbers. 
        Then we must test that we return the right result that is a number and not others types.
        We can tests them separately so we can have 8 tests, but it's not necessary, we can tests them at the same time so 4 tests are sufficients.
        
    2. How are the blocks describe and it being used in the tests? What is the purpose of each?
      Describe like it's name, it's to break all the tests into components. Depends on the strategy,
      we can describe our tests as a multiple test for each functions inside the classe, each module
      of the plugins or even describe the test with each functonnality.
      "it", in the contrary, is where we perform the individual tests.
      Describe the strategy of our tests with specific strategies into components. Then, it will
      test individually insite that component.

    3. How are the test descriptions phrased? Are there any keywords that stand out?
        Yes, i see the word "expect(add).toBeDefined();", it's clear that the tests will expect,
        add to be defined first, without the definition, it will fail.

    4. What do the expect functions do, and what input do they take?
        The expect mode can do two things, it always wait for an assertion that it is true or false,
        in the exemlpe of "add function", it will take the add function and will tell if it's defined (true)
        or undefined "false".
    */
