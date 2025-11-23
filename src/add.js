function add(numOne, numTwo) {
  if (
    numOne === undefined ||
    numTwo === undefined ||
    typeof numOne !== "number" ||
    typeof numTwo !== "number"
  ) {
    return undefined;
  }
  return numOne + numTwo;
}

// Review the add function (in the src/add.js file) to understand how functionality is implemented and how it relates to the tests.
/* 
 It is related wuth the test because like we can see, whe have an "add" function that can be found in the test, inside the 
 component test called "describe", we have one test unit, "it" will tell if the "add" function is expected to be defined (true)
 or undefined (false). It must defined because defined "add" function is what's expected.
 And the others test too.
 */
