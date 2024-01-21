function add (numOne, numTwo) {
    if (numOne === "" || numOne === undefined || numTwo === "" || numTwo === undefined) {
        return undefined;
    }

    return numOne + numTwo;
}