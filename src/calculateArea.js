function calculateArea(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    return Math.round((numOne * numTwo) * 100) / 100 
}