function calculateArea(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    if (numOne === undefined || numTwo === undefined) {
        return undefined;
    }
    
    return numOne * numTwo;
}   