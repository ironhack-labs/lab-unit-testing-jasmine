function calculateArea(numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }

    if(typeof numOne !== "number" || isNaN(numOne) || typeof numTwo !== "number" || isNaN(numTwo)){
        return undefined;
    }

    return numOne * numTwo;
}