function add(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }

    return numOne + numTwo;
}

// 1. How many tests are there for the add function in the add.test.js file?
// There are 4 Tests.

// 2. How are the blocks describe and it being used in the tests? What is the purpose of each?
//The 'describe' blocks work to give a hierarchy structure to the tests and the 'it' blocks are used to define each test with their own expectation.

//3. How are the test descriptions phrased? Are there any keywords that stand out?
//The test often start with the word "should," indicating the expected behavior of the code being tested.

//4. What do the expect functions do, and what input do they take?
//The expect function is used for assertions in tests, it takes a value and is chained with matcher functions like toBeDefined(), toBe(2), etc. Matchers define expected outcomes in test cases, and if a match fails, the test fails.