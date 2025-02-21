function divide (numOn, numTwo) {
    if( typeof(numOn) !== 'number' || typeof(numTwo) !== 'number'){
        return undefined;
    }
    return numOn / numTwo;
}