// Answers to Iteration 1 | Getting Started:

// 1. There are 4 tests for the add function in the add.spec.js file.
// 2. The describe blocks are used to group related tests together, while the it blocks define individual test cases.
//    The purpose of describe is to provide a higher-level organization, while it is used for specifying individual test cases.
// 3. Test descriptions are phrased in a clear and concise manner, indicating what behavior is being tested. Keywords like "should" and "expected" stand out.
// 4. The expect functions are used to define the expected behavior or outcome of the function being tested. They take the actual output of the function and compare it to the expected output.


function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne != "number" || typeof nomTow != "number"){


    }

    return numOne + numTwo;
}
