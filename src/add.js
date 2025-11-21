function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return NaN;
    }

    return numOne + numTwo;
}