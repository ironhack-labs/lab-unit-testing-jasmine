function divide (numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number'){
        return undefined;
    } else if (numOne == undefined || numTwo == undefined){
        return undefined;
    }
    let result = numOne / numTwo;
    return result;
}