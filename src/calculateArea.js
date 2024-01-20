function calculateArea(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }
    else {
        return numOne * numTwo;
    }
}