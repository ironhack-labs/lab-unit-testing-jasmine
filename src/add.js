//function add (numOne, numTwo) {
//    if (numOne == undefined || numTwo == undefined) {
//        return undefined;
//    }
//
//    return numOne + numTwo;
//}

function add(numOne, numTwo) {
    // Check if either numOne or numTwo is undefined or not a number
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return undefined;
    }
    return numOne + numTwo;
}
