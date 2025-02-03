function add (numOne, numTwo) {
    if (numOne === undefined || numTwo === undefined) {
        return undefined;
    }

    // checking if one or both arguments is not a number
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
    return undefined;
}
    return numOne + numTwo;
}

console.log(add('words', 1));