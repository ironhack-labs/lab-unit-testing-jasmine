function add (numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
}

// Review Code
/* 
the function is named 
the functino has two parameters (expected .toBe(2))
there are two possible outcomes (undefinded and sum of two numbers) 
that are cleared with two(three) conditions.
 */