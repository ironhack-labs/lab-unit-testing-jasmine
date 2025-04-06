function add (numOne, numTwo) {

    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }

    return numOne + numTwo;
}


/*
Qustions:
1. 4 tests for the add function
2. describe is used create test suits which group related tests,
    it contains the single tests within a test suit
3. the arguments of the it-function are a string describing the test case,
    an anonymous function which contains the test conditions expressed
    by th e functions expect(testFunction) and toBe().
4. The expect functions evoke the tested function. the tested function 
    with test argument is given as its argument.
*/