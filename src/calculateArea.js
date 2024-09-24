function calculateArea(numOne, numTwo) {
    if (typeof(numOne) !== "number" || typeof(numTwo) !== "number") {
        return undefined;
    }
    return numOne * numTwo;
}