function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
}

/* 1. checks if the function is defined --- the test passes.
2. checks if function takes two parameters (numOne, numTwo) --- satisfies the test.
3. checks if function correctly returns the sum of two numbers --- pass.
4. returns undefined if any argument is missing --- pass. */

// Updating the function to pass the new test: 

function add(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      return undefined;
    }
    return numOne + numTwo;
  }
  