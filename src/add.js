function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    return numOne + numTwo;
}
console.log(add (1,2))