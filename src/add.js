function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    // if(isNaN(numOne) || isNaN(numTwo)) {
    //     return undefined;
    // }
    if(typeof numOne != "number" || typeof numTwo != "number") {
        return undefined;
    }

    return numOne + numTwo;
}

/*
How many tests are there for the add function in the add.spec.js file?
    5 testes.
How are the blocks describe and it being used in the tests? What is the purpose of each?
    They describe by human words what the test does and groups the tests.
How are the test descriptions phrased? Are there any keywords that stand out?
    How the function/code being tested should behaved. "Should"
What do the expect functions do, and what input do they take?
    They take arguments that would run on the code that we are testing and testify the truthy of the result
*/