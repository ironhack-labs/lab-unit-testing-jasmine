function divide (numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }

    if (numTwo === 0) {
        throw new Error('Cannot divide by zero');
    }

    return numOne / numTwo;
}
