function add(numOne, numTwo) {
  if (numOne == undefined || numTwo == undefined) {
    return undefined;
  }
  if (typeof numOne != 'number' || typeof numTwo != 'number') {
    return undefined;
  }
  return numOne + numTwo;
}

/* 
REVIEW THE TESTS

1) How many tests are there for the add function in the add.spec.js file?
- Four

2) How are the blocks describe and it being used in the tests? What is the purpose of each?
- The "describe" block is used to group the tests and the "it" block is used to define the 
test.

3) How are the test descriptions phrased? Are there any keywords that stand out?
- The it block takes two arguments; the first one is a string describing what is the test for
and the second one is a callback function. The word "expect" is present in every it block.

4)What do the expect functions do, and what input do they take? 
- The expect function is used to check if the condition of the callback function is true or 
false.

REVIEW THE CODE

5) Review the add function (in the src/add.js file) to understand how functionality is 
implemented and how it relates to the tests.
- The add function takes two arguments and returns the sum of the two arguments.
*/
