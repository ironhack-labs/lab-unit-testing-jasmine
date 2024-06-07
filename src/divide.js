function divide(a, b) {
    if (a === undefined || b === undefined) {
        return undefined;
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        return undefined;
    }
    if (b === 0) {
        return Infinity;
    }
    return a / b;
}
