function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) return undefined;
    if (typeof numOne !== "number" || typeof numTwo !== "number") return undefined;

    return numOne + numTwo;
}

/**
 * Answer the questions below:
 * 1. How many tests are there for the add function in the add.spec.js file?
 * Answer: there are currently four tests in add.spec.js
 * 
 * 2. How are the blocks describe and it being used in the tests? What is the purpose of each?
 * 3. How are the test descriptions phrased? Are there any keywords that stand out?
 * Answer: There are some keywords likes "should take...", "should return...", or "should be..."
 * 4. What do the expect functions do, and what input do they take?
 * 
 *  * Answer question 2 and 4: In add.spec.js, describes the function of the sum of two numbers as argument; 
 * the first "it", requires that the function "add" to be defined, at the second "it",
 * asks me to that function that should take two arguments to sum and does retur nthe result,
 * the third "it" requires that the function should return the sum of the two numbers, and,
 * the last "it" demands that the function should return undefined if any of arguments 
 * is not provided.
 */