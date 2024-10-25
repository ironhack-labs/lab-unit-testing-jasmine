function add (numOne, numTwo) {
    if ((typeof numOne) !== 'number' || (typeof numTwo) !== 'number') return undefined;
    return Number.isNaN(numOne + numTwo) ? undefined : numOne + numTwo;
}

console.log(typeof NaN);