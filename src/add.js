function add (numOne, numTwo) {

 /*   if (numOne == undefined || numTwo == undefined) {
        return undefined;
    } */

    if (!Number.isInteger(numOne)  || !Number.isInteger(numTwo)) {
        return undefined;
    }

    return numOne + numTwo;
}