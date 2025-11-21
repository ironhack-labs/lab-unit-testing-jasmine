function divide (a, b) {
    if (a == undefined || b == undefined) {
        return undefined;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    if (a > 0 && b === 0) {
        return Infinity;
    }
    if (a < 0 && b === 0) {
        return -Infinity;
    }
    
    return a / b;
}