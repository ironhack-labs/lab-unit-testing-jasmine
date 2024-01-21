function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || numOne === "" || numTwo === "" ) {
        return undefined;
    }

    return numOne + numTwo;
}