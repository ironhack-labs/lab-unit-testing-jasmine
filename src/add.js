function add (numOne, numTwo) {
    
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (typeof numOne != "number" || typeof numTwo != "number") {
        return undefined;
    }

    return numOne + numTwo;
}


/* Review the Tests: Answers

1. 4

2. "Describe" is being used to bring together every spec that we may use to describe the various ways in which our function is to be tested. 

(...)

*/