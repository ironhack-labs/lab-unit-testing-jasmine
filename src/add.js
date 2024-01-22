function add(numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    else if (add.length === 2) {
        return numOne + numTwo
    }

    else if (numOne !== Number || numTwo !== Number) {
        return undefined
    }
}

const numbers = [1, 2]