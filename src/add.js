/*Iteration One
// Review the tests
1. There are 4 tests: should be defined, shoult take two arguments, shoult return the sum of the two numbers, and should return undefined if either argument is not provided
2. The 'describe' block is a function that invokes and displays the status of all of the 'it' functions contained within it on the webpage created by the SpecRunner.hmtl page. The 'it' blocks are each the same function, containing a description of the test being performed to be displayed on the SpecRunner.html page. Each invokes the function 'expect' to invoke invokes the 'add' function with different parameters to test its functionality. 
3. The test descriptions all use the keyword 'should' followed by a description of what the function is expected to do.
4. The 'expect' function invokes the add function with various arguments, followed by invoking one of several methods with compare various aspects of add, like the number of parameters it accepts or what it returns, to a predetermined value. Based on this comparison, expect then displays the first argument passed to it in green or red, depending on if the expected outcome occurs or not
*/

// 6..
function add (numOne, numTwo) {
    /* Original code - check for missing arguments
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }*/

    // 9. Refactored code - check for missing arguments
    if (!numOne || !numTwo) {
        return undefined;
    }

    //  8. Check for string arguments
    if (typeof numOne != "number" || typeof numTwo != "number") {
        return undefined;
    } 

    return numOne + numTwo;
}
