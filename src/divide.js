function divide(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    
    if (numTwo === 0) {
        return Infinity; // Handle division by zero according to JavaScript behavior
    }

    return numOne / numTwo;
}