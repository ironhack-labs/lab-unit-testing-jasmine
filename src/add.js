function add (numOne, numTwo) {
    if ((numOne == undefined || numTwo == undefined) || (typeof numOne !== "number" || typeof numTwo !== "number")) {
        return undefined;
    }

    return numOne + numTwo;
}


/* 
Review the Tests

1. How many tests are there for the add function in the add.spec.js file?

- There are currently 4 tests

2. How are the blocks describe and it being used in the tests? What is the purpose of each?

- describe defines a test, the it blocks determine what the test is going to evaluate

3. How are the test descriptions phrased? Are there any keywords that stand out?

- the tests are defined as so: should return <expected output> then the callback function calls the function
  we want to test using the expect which defines what 'expect' as an output from the function. We then use
  matchers like .toEqual and .toBe which are jasmine functions that specify the expected behavior of the function
  and what it returns.

4. What do the expect functions do, and what input do they take?

- Expect functions take one argument which is the function we are testing for. We add the arguments to 
the tested function as if we were calling it in our code and then chain the .toEqual or other matcher method
that defined the expected output of the arguments passed into the tested function.

Common matchers:

.toBeDefined() check if function is defined
.toBe() strings
.toEqaul() nums
*/