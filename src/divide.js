function divide (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined || numOne == String || numTwo == String) {
        return undefined;
    }

    return numOne / numTwo;   
}