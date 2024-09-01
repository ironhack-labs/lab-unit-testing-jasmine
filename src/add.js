function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    else if (typeof numOne!== "number")
        return undefined;
    else if (typeof numTwo!== "number")
        return undefined;

    return numOne + numTwo;
}