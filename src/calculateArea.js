function calculateArea(numOne, numTwo) {
    if (typeof (numOne) === "number" && typeof (numTwo) === "number" && numOne > 0 && numTwo > 0) {
        return numOne * numTwo;
    }
    return undefined;
}