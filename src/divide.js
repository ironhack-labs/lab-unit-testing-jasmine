function divide(numOne, numTwo) {
  if (
    numOne == undefined ||
    numTwo == undefined ||
    typeof numOne === "string" ||
    typeof numTwo === "string"
  ) {
    return undefined;
  }

  return numOne / numTwo;
}

// Now that you have a better understanding of how the Jasmine unit tests work, it's time to repeat the process. 🧪

// Following the example of the add function and its unit tests, write the unit tests for the divide function and then implement the function.

// Files: tests - tests/divide.spec.js | code - src/divide.js

// Here are the requirements for the divide function:

// The function should be defined.
// The function should take two numbers as arguments.
// The function should return the division of the two numbers.
// The function should return undefined if any of the arguments is not provided

// Here are the steps you should follow:

// Write the unit tests for the divide function in the tests/divide.spec.js file. Make sure to include at least one test for each of the requirements listed above.
// You can use the unit tests for the add function as a reference.
// Run the tests by opening the SpecRunner.html file using the Live Server extension. You should see that all tests are failing.
// Implement the function divide function in the src/divide.js file.
// Rerun the tests again. You should see that all tests are passing.
// Once the tests are passing, review the code and refactor if needed. Some questions to ask: Are there any additional edge cases that you should test for and implement in the function? If so, go ahead and repeat the process of Red-Green-Refactor until you are satisfied with the code.
