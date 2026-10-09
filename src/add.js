function add (numOne, numTwo) {
    if (numOne === undefined || numTwo === undefined) {
        return undefined;
    } else if (typeof numOne !== "number" || typeof numTwo !== "number"){
        return undefined;
    }

    return numOne + numTwo;
}


// 1. There are 4 tests
// 2. 'describe' is a function used to group related tests,
// while 'it' is used to define a single test.  
// 3. The tests are structured with functions that check if the
// code is working. The key words are 'describe, 'it' and 
//'expect'; and then also we have Matchers like 'toBe' or 
// 'toEqual' among others that are chained function call. 
// 4. They define the expectations of the test. And they have
// inputs to check if the code is right.