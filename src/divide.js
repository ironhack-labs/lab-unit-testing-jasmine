function divide (numToDivide, numToDivideBy) {
    if (numToDivide === undefined || numToDivideBy === undefined) {
        return undefined
    }
    if (typeof numToDivide !== 'number' || typeof numToDivideBy !== 'number') {
        return undefined
    }

    return numToDivide / numToDivideBy;
       
}