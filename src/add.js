function add (numOne, numTwo) {
    
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    } else if(typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    return numOne + numTwo;
}

/*Review the Tests

How many tests are there for the add function in the add.test.js file?
4

How are the blocks describe and it being used in the tests? What is the purpose of each?
describe, explain the test purpose and it creates the test case

How are the test descriptions phrased? Are there any keywords that stand out?
It starts with should and a description of an action or return that the test should do

What do the expect functions do, and what input do they take?
define the expected result, the input is the value of the function that is tested, or any value that we want to test*/