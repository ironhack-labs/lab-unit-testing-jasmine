function calculateArea(x, y) {
    
    if (x < 0 || y < 0) {
        return undefined;
    }

    if (x == undefined || y == undefined) {
        return undefined;
    }
    if (x === 0 || y === 0) {
        return 0;
    }
    
    if (typeof x !== 'number' || typeof y !== 'number') {
        return NaN;
    }

    return x * y;
}