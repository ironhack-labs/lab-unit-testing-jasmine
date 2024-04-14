function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    } else if (typeOf numOne !== 'number' || typeof numTwo !== 'number'){
        return undefined
    }

    return numOne + numTwo;
}

add(10, 57)