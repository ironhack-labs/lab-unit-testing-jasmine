function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== undefined) {
        return undefined
    } else {
        return a / b
    }
}