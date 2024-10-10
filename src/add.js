function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    else if (typeof numOne !== "number" || typeof numTwo !== "number"){
        return undefined;
    }

    return numOne + numTwo;
}

/* 1. How many tests are there for the add function in the add.spec.js file?
There are 4 tests. 
2. How are the blocks describe and it being used in the tests? What is the purpose of each?
"Describe" groups together related tests. I think is a way of creating "folders" and "subfolder"
in the different tests to keep them organiced. 
"It" mark each of the tests, they describe an specific behavior of the code. 
3. How are the test descriptions phrased? Are there any keywords that stand out?
The test desscriptions start with "It" and is followed with a phrase of what the code should do to p
pass this test, like "should return, should be, should take"
4. What do the expect functions do, and what input do they take?
The expect functions do literally pose examples of what the function should do, take the output of the code being tested
as the input and compares with the expected value. */
