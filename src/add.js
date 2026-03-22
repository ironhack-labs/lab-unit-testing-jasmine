function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
};

function divide (a, b) {
    if (typeof a!== "number" || typeof b !== "number") {
        return undefined;
    }

    return a / b;
};

