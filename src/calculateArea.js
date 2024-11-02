function calculateArea(length, width) {
    if(length == undefined || width == undefined || typeof length !== "number" || typeof width !== "number") {
        return undefined;
    }
    return length * width;
}



/* function divide (numOne, numTwo) {
    if(numOne == undefined || numTwo == undefined || typeof numOne !== "number" || typeof numTwo !== "number") {
        return undefined;
    }
    return numOne / numTwo;
}
*/