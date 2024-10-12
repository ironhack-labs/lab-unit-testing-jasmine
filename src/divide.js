function divide (numOne, numTwo) {
     
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (typeof(numOne) !== "number" || typeof(numTwo) !== "number") {
        return undefined;
    }
    // if (numTwo == 0) {
    //     return Infinity;
    // }

    return numOne / numTwo;
}
