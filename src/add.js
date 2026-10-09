function add (numOne, numTwo) {
    if (numOne === undefined || numTwo === undefined) {
        return undefined;
    }
    if (Number.isNaN(numOne)|| Number.isNaN(numTwo)) {
        return undefined;
    }

    if (typeof numOne != "number"||typeof numTwo != "number")
    {
        return undefined
    }
    return numOne + numTwo;
}