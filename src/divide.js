function divide(dividend, divisor) {
    if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        return undefined;
    }  

    return dividend / divisor;
}

divide(10, 5);