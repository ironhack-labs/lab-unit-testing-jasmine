function divide (numOne, numTwo) {
    if (numOne === undefined || numTwo === undefined || typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }
    if (numTwo === 0)
        return undefined;
    return numOne / numTwo;
}