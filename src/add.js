function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (numOne === 0 || numTwo === 0) {
        return 0
    }

    return numOne + numTwo;
}

