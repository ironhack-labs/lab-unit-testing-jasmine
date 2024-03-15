function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (Number.isFinite(numOne) == false || Number.isFinite(numTwo) == false ) {
        return undefined;
    }
    return numOne + numTwo;
}