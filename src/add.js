function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return undefined;
}

return numOne + numTwo;
}

/*
    
1- How many tests are there for the add function in the add.spec.js file?

There are four tests ("specifications") for the add function in the add.spec.js file.

2- How are the blocks describe and it being used in the tests? What is the purpose of each?

The describe block is used to group together related tests. It is used to define a suite of tests that are related to a specific function or feature. The it block is used to define individual test cases. It is used to specify the expected behavior of a function or feature under certain conditions.


How are the test descriptions phrased? Are there any keywords that stand out?

The test descriptions are phrased in a clear and concise manner, using language that describes the expected behavior of the function being tested. Some keywords that stand out include "should be defined", "should take two arguments", "should return the sum of the two numbers", and "should return undefined if any of the arguments is not provided".

What do the expect functions do, and what input do they take?

The expect functions are used to define the expected outcome of a test case. They take the actual result of a function or operation as input, and compare it to the expected result using matchers such as toBe, toEqual, or toBeDefined.*/