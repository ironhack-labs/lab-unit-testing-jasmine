function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne != "number")
        return undefined;

    return numOne + numTwo;
}