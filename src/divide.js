function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return undefined;
    } else if (b === 0) {
        return NaN;
    }
    return a / b;
}

//Test cases
//console.log(divide(6, 0));