function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || Number.isNaN(numOne) || Number.isNaN(numTwo)) {
        return undefined;
    }

    return numOne + numTwo;
}