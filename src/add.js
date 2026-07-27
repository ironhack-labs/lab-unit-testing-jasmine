function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || typeof numOne != "number" || typeof numTwo != "number" ) {
        return undefined;
    }

    return numOne + numTwo;
}

/*

Review

5. the function takes 2 parameters. If one of them is 'undefined', the function returns 'undefined'. And if not, she returns the addition of the 2 elements if they are 2 numbers or she concatenates if they are strings

*/