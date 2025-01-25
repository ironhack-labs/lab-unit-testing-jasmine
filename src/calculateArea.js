function calculateArea(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return undefined;
    }
    if (a === undefined || b === undefined) {
        return undefined;
    }

    return a*b;
}