function add (numOne, numTwo) {
    if (!Number.isFinite(numOne) || !Number.isFinite(numTwo)) {
        return undefined;
    }

    return numOne + numTwo;
}