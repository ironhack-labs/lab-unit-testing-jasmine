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
      it ("should return undefined if any of the argument is not a number", () => {
    expect();
    expect(add(5, 'hello')).toBeUndefined(undefined);
    expect(add('5', '10')).toBeUndefined(undefined);
    expect(add(5, undefined)).toBeUndefined(undefined);
    expect(add(null, 10)).toBeUndefined(undefined);
      })
    });
  });
   
// How many tests are there for the add function in the add.spec.js file?
// there are two add test function in the add.spec.js file. 

// How are the blocks describe and it being used in the tests? What is the purpose of each?

// How are the test descriptions phrased? Are there any keywords that stand out?

// What do the expect functions do, and what input do they take?
// expect functions take the value/variable and tells what to expect the when the code runs and what should be the response/solution/output.


//  Review the Code

// Review the add function (in the src/add.js file) to understand how functionality is implemented and how it relates to the tests.

// Write a New Unit Test

// Add a new test using the it function to test for the following requirement:

// The function should return undefined if any of the two arguments is not a number.
// To run the tests, open SpecRunner.html using the Live Share extension.
// As per the Red phase of the Red-Green-Refactor cycle, the test should initially fail 🔴 and that is fine!


// Write the Code to Make the Test Pass

// Update the code of the add function to make the new test pass.
// Once you correctly implement the new functionality, the test should turn green 🟢.
