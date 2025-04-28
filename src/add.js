function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (isNaN(numOne) || isNaN(numTwo)) {
        return undefined;
    }
    return numOne + numTwo;
}