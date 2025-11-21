function divide (numOne, numTwo) {
       if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
     if (typeof numOne == 'object' || typeof numTwo == 'object') {
        return undefined;
     }
    return numOne / numTwo;
}