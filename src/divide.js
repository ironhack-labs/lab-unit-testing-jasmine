function divide(dividend, divisor) {
    if (dividend == undefined || divisor == undefined) {
        return undefined;
    } else if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        return undefined
    }
    return dividend / divisor
}
divide(10, 5)