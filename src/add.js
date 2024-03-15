function add(numOne, numTwo) {
    if (typeof numOne === 'string' || typeof numTwo === 'string' || numOne === undefined || numTwo === undefined) {
        return undefined;
    }

    return numOne + numTwo;
}
