function add(numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return undefined // Si el tipo de numOne o numTwo no es un number, devuelve undefined.
    }

    return numOne + numTwo;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== undefined) {
        return undefined
    } else {
        return a / b
    }
}