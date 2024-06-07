function divide (numOne, numTwo) {

    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    if (numTwo === 0) {
        return undefined;
    }
    return Math.round((numOne / numTwo) * 100) / 100 
}