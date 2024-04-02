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
  });
});

/*
Review the Tests

1.  How many tests are there for the add function in the add.spec.js file?
    > 4

2.  How are the blocks describe and it being used in the tests? What is the purpose of each?
    > describe: groups together related tests
    > it: defines a test case

3.  How are the test descriptions phrased? Are there any keywords that stand out?
    > ... expected behavior

4.  What do the expect functions do, and what input do they take?
    > ... assertions

Review the Code

5.  Review the add function (in the src/add.js file) to understand how functionality is implemented and how it relates to the tests.

Write a New Unit Test

6.  Add a new test using the it function to test for the following requirement:
      The function should return undefined if any of the two arguments is not a number.

7.  To run the tests, open SpecRunner.html using the Live Share extension.
    As per the Red phase of the Red-Green-Refactor cycle, the test should initially fail 🔴 and that is fine!


Write the Code to Make the Test Pass

8.  Update the code of the add function to make the new test pass.
    Once you correctly implement the new functionality, the test should turn green 🟢.

Refactor

9.  Take another look at the add function. Is there anything that could be improved? Could you somehow simplify the code to make it easier to read? 🟠

10. After you are done refactoring, check the tests one last time to make sure everything is still working fine after refactoring.
*/