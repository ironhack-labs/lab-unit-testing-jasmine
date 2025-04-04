function divide (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if (numTwo === 0) {
        return "undefined";
    }

    return numOne / numTwo;
       
}