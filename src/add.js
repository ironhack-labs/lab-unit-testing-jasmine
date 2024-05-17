function add(numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    return numOne + numTwo;
}
// ? Write test first
// ? Write code to make the test pass
// ? Write code to pass all the test
// 1. How many tests are there for the add function in the add.spec.js file?
// * There is 4 tests (1 for each it())
// 2. How are the blocks describe and it being used in the tests? What is the purpose of each?
// * describe() is like a title and is used to group tests
// * it() says what to be expected and is used to actually test the function
// 3. How are the test descriptions phrased? Are there any keywords that stand out?
// * keyword "should", described how the function works
// 4. What do the expect functions do, and what input do they take?
// * expect() test the function with parameter and compare it with some value
